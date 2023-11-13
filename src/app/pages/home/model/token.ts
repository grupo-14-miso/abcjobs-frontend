
export class Token {
  constructor(
    public id: string,
    public token: string,
    public expireAt: string,
    public role: string,
    public name: string,
  ) {}
}
