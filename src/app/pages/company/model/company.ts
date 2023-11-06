export class Company {
  company_id: number;
  country: string;
  created_date: string;
  document_number: string;
  document_type: string;
  email: string;
  last_modified: string;
  name: string;
  phone_number: string;

  constructor(
    company_id: number,
    country: string,
    created_date: string,
    document_number: string,
    document_type: string,
    email: string,
    last_modified: string,
    name: string,
    phone_number: string
  ) {
    this.company_id = company_id;
    this.country = country;
    this.created_date = created_date;
    this.document_number = document_number;
    this.document_type = document_type;
    this.email = email;
    this.last_modified = last_modified;
    this.name = name;
    this.phone_number = phone_number;
  }
}
