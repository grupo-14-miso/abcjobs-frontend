export class Interview {
  id: number;
  id_company: string;
  id_offer: string;
  date: string;
  description: string;
  link: string;
  result: string;
  candidates: string[];

  constructor(
    id: number,
    id_company: string,
    id_offer: string,
    date: string,
    description: string,
    link: string,
    result: string,
    candidates: string[]
  ) {
    this.id = id;
    this.id_company = id_company;
    this.id_offer = id_offer;
    this.date = date;
    this.description = description;
    this.link = link;
    this.result = result;
    this.candidates = candidates;
  }
}
