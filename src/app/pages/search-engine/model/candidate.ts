import { Key } from "../../interview/model/key";

export class Candidate {
  constructor(
    public key: Key,
    public id_candidato: string,
    public Nombre: string,
    public apellido: string,
    public ciudad_nacimiento: string,
    public ciudad_residencia: string,
    public documento: string,
    public educacion: Education[],
    public email: string,
    public estado_civil: string,
    public experiencia: Experience[],
    public fecha_nacimiento: string,
    public genero: string,
    public idiomas: Language[],
    public lenguajes_programacion: string[],
    public nacionalidad: string,
    public pais_nacimiento: string,
    public pais_residencia: string,
    public password: string,
    public segundo_apellido: string,
    public segundo_nombre: string,
    public tecnologias_herramientas: string[],
    public soft_skill: string[],
    public rol: string[],
    public telefono: string,
    public tipo_documento: string,
  ) {}
}

export class Education {
  constructor(
    public fecha_fin: string,
    public fecha_inicio: string,
    public institucion: string,
    public nivel_academico: string,
    public titulo_obtenido: string,
    public pais: string
  ) {}
}

export class Experience {
  constructor(
    public cargo: string,
    public ciudad: string,
    public empresa: string,
    public fecha_fin: string,
    public fecha_inicio: string,
    public pais: string,
    public rol: string
  ) {}
}

export class Language {
  constructor(
    public fecha_certificacion: string,
    public idioma: string,
    public nativo: string,
    public nivel_conversacion: number,
    public nivel_escritura: number,
    public nivel_lectura: number
  ) {}
}
