
export class TokenData {
  constructor(
    public id: string,
    public token: string,
    public expireAt: string,
    public role: string,
    public name: string,
    public key: string,
  ) {}
}
