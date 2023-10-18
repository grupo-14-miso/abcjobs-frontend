// Define una interfaz para SearchParams
interface ISearchParams {
  softSkills: string[];
  idiomas: string[];
  tecnologiasHerramientas: string[];
  rol: string[];
  lenguajes_programacion: string[];
}

export class SearchParams implements ISearchParams {
  [key: string]: string[] | undefined; // Índice de tipo explícito

  softSkills: string[] = [];
  idiomas: string[] = [];
  tecnologiasHerramientas: string[] = [];
  rol: string[] = [];
  lenguajes_programacion: string[] = [];
  tools: string[] = [];
}
