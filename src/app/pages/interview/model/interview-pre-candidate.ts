export class InterviewPreCandidate {
  id_company: string;
  id_offer: string;
  id_candidate: string;

  constructor(id_company: string, id_offer: string, id_candidate: string) {
    this.id_company = id_company;
    this.id_offer = id_offer;
    this.id_candidate = id_candidate;
  }
}
