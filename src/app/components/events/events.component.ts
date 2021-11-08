import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Discipline, RaceEvent } from 'src/app/shared/raceevent.model';
import { EventsDialogComponent } from './events-dialog/events-dialog.component';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events: RaceEvent[] = [
    {
      location: "Diavolezza",
      startDate: "tadkf",
      infos: "test infos",
      discipline: Discipline.DH,
      tore: 36
    },
    {
      location: "Züri",
      startDate: "2312",
      infos: "test infos",
      discipline: Discipline.SL,
      tore: 36
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(EventsDialogComponent, {
      width: '800px',
      data: {},
    });
  }

}
