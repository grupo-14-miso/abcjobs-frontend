import { Company } from "../../company/model/company";
import { Offer } from "../../company/model/offer";
import { Candidate } from "../../search-engine/model/candidate";

export class Interview {
  id: number;
  id_company: string;
  id_offer: string;
  date: string;
  description: string;
  link: string;
  result: string;
  candidates: string[];
  candidates_details: CandidateDetails[];

  constructor() {
    this.id = 0;
    this.id_company = '';
    this.id_offer = '';
    this.date = '';
    this.description = '';
    this.link = '';
    this.result = '';
    this.candidates = [];
    this.candidates_details = [];
  }
}

export class CandidateDetails {
  candidate: Candidate;
  company: Company;
  offer: Offer;

  constructor(candidate: Candidate, company: Company, offer: Offer) {
    this.candidate = candidate;
    this.company = company;
    this.offer = offer;
  }
}
