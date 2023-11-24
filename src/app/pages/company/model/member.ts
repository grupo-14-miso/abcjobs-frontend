export class Member  {
  constructor(
    public candidate_id: string,
    public offer_id: string,
    public nombre: string,
    public rol: string,
    public tipo: string,
    public estado: string,
  ) {}
}
