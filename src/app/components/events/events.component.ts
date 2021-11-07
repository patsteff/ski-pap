import { Component, OnInit } from '@angular/core';
import { Discipline, RaceEvent } from 'src/app/shared/raceevent.model';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events: RaceEvent[] = [
    {
      name: "test name",
      location: "Diavolezza",
      startDate: "tadkf",
      infos: "test infos",
      discipline: Discipline.DH,
      tore: 36
    },
    {
      name: "test name 2",
      location: "Züri",
      startDate: "2312",
      infos: "test infos",
      discipline: Discipline.SL,
      tore: 36
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log("open dialogue")
  }

}
