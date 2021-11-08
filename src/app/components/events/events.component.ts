import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RaceEvent } from 'src/app/shared/raceevent.model';
import { EventsDialogComponent } from './events-dialog/events-dialog.component';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  public events: RaceEvent[] = [
    //{
    //  location: "Züri",
    //  startDate: "2312",
    //  infos: "test infos",
    //  club: "BSV",
    //  discipline: "DH",
    //  tore: 36
    // }
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
