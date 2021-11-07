export enum Discipline {
  SL,
  GS,
  SG,
  DH
}

export interface RaceEvent {
  name: string;
  id?: string;
  location: string;
  startDate: string;
  infos?: string;
  discipline: Discipline;
  tore: number;
}
