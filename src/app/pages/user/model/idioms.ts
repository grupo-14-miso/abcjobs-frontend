import { Education, Experience, Language } from "../../search-engine/model/candidate";

export class Idiomas  {
  constructor(
    public id_candidato: string,
    public idiomas: Language[],
  ) {}
}
