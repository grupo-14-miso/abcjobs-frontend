import { Education, Experience } from "../../search-engine/model/candidate";

export class WorkExperience  {
  constructor(
    public id_candidato: string,
    public experiencia: Experience[],
  ) {}
}
