export class Assignment {
  constructor(
    public assignment_id: number,
    public candidate_id: number,
    public nombre: string,
    public apellido: string,
    public focus: string,
    public questions: Question[],
    public result: string,
    public rol: string,
    public status: string,
    public type: string
  ){}
}

export class Question {
  constructor(
    public answers: Answer[],
    public correct_answer: string[],
    public selected_answer: string[],
    public description: string
  ){}
}

export class Answer {
  constructor(
    public a?: string,
    public b?: string,
    public c?: string,
    public d?: string
  ){}
}

export class Notification {
  constructor(
    public message: string,
  ){}
}

