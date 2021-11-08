export enum Discipline {
  SL,
  GS,
  SG,
  DH
}

export interface RaceEvent {
  id?: string;
  location: string;
  startDate: string;
  infos?: string;
  discipline: Discipline;
  tore: number;
}
