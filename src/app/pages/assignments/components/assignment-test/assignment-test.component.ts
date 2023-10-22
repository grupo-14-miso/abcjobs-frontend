import { Component, Input, OnInit } from '@angular/core';
import { Answer, Assignment, Question, } from '../../model/assignment';
import { FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { PreloaderService } from 'src/app/core/template/services/preloader.service';
import { AssignmentService } from '../../services/assignment.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-test',
  templateUrl: './assignment-test.component.html',
  styleUrls: ['./assignment-test.component.css']
})
export class AssignmentTestComponent implements OnInit {

  @Input() assignment?: Assignment;
  i_question : number = 0;
  text_boton : string = "Siguiente";

  questionForm!: FormGroup;
  answerOptions: { key: string, value: string }[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private preloaderService: PreloaderService,
    private assignmentService: AssignmentService,
    private router: Router

    ) {
      this.formBuilderGroup();
     }

  ngOnInit() {
  }

  getQuestion(i_question: number): Question {
    if (this.assignment && this.assignment.questions && this.assignment.questions[i_question]) {
      return this.assignment.questions[i_question];
    }
    const answers: Answer[] = [];
    const correctAnswers: string[] = [];
    const selectedAnswer: string[] = [];
    const description: string = "";
    const question = new Question(answers, correctAnswers, selectedAnswer, description);
    return question;
  }

  getAnswerOptions(i_question: number): { key: string, value: string }[] {
    var question = this.getQuestion(i_question)

    this.answerOptions = question.answers.map(answer => {
      const keyValues = Object.entries(answer);
      return keyValues.map(([key, value]) => ({ key, value }));
    }).reduce((acc, curr) => acc.concat(curr), []);

    return this.answerOptions
  }

  getAnswerOption(i_question: number, key: string): { key: string; value: string } {
    var answerOptions = this.getAnswerOptions(i_question);
    var option = answerOptions.find(item => item.key === key);
    if (option) {
      return option;
    } else {
      return { key: '', value: '' };
    }
  }

  getQuestionNumber(): number {
    var n_question = this.i_question + 1;
    if(n_question == this.assignment?.questions.length){
      this.text_boton = "Finalizar y enviar"
    }
    return n_question
  }

  send(i_question: number, assignment_id?: number) {
    if(assignment_id){
      var question = this.getQuestion(i_question)
      var selected_answer: string[] = [];

    var selected_answer_control = this.questionForm.get('selected_answer')
    if(selected_answer_control){
      selected_answer.push(selected_answer_control.value)
    }
    this.questionForm.reset();

    question.selected_answer = selected_answer
    console.log(question)
    this.preloaderService.showPreloader();
      this.assignmentService.saveQuestion(assignment_id, question).subscribe({
        next: (data) => {
          console.log(data)
          setTimeout(() => {
            var n_question = this.i_question + 1;
            if(n_question == this.assignment?.questions.length){
              this.assignmentService.finishTest(assignment_id).subscribe({
                next: (data) => {
                  console.log(data)
                  this.preloaderService.hidePreloader();
                  Swal.fire({
                    title: 'Prueba finalizada con exito',
                    text: 'A continuación puede acceder a los resultados',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                  }).then((result) => {
                    if (result.isConfirmed) {
                      location.reload();
                    }
                  })
                },
                error: (error) => {
                  console.error(error);
                }
              });
            }else{
              this.i_question = this.i_question+1;
              this.preloaderService.hidePreloader();
            }
          }, 1000);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }

  }

  formBuilderGroup() {
    this.questionForm = this.formBuilder.group({
      selected_answer: ["", Validators.required],
    });
  }
}
