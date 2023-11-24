export class OfferCreate {
  company_id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;

  constructor(
    company_id: string,
    name: string,
    description: string,
    start_date: string,
    end_date: string
  ) {
    this.company_id = company_id;
    this.description = description;
    this.end_date = end_date;
    this.name = name;
    this.start_date = start_date;
  }
}
