import { Education } from "../../search-engine/model/candidate";

export class Academic  {
  constructor(
    public id_candidato: string,
    public educacion: Education[],
  ) {}
}
