export class Offer {
  company_id: string;
  created_date: string;
  description: string;
  last_modified: string;
  name: string;
  offer_id: number;
  end_date: string;
  start_date: string;

  constructor(
    company_id: string,
    created_date: string,
    description: string,
    end_date: string,
    last_modified: string,
    name: string,
    offer_id: number,
    start_date: string
  ) {
    this.company_id = company_id;
    this.created_date = created_date;
    this.description = description;
    this.end_date = end_date;
    this.last_modified = last_modified;
    this.name = name;
    this.offer_id = offer_id;
    this.start_date = start_date;
  }
}
