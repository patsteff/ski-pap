import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RaceEvent } from 'src/app/shared/raceevent.model';
import { EventService } from 'src/app/shared/services/event.service';
import { EventsDialogComponent } from './events-dialog/events-dialog.component';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  public events: RaceEvent[] = [];

  constructor(public dialog: MatDialog, private eventsService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe((actionArray) => {
      this.events = actionArray.map((item) => ({
        id: item.payload.doc.id,
        ...item.payload.doc.data() as RaceEvent,
      }));
    });
  }

  openDialog(): void {
    this.dialog.open(EventsDialogComponent, {
      width: '800px',
      data: {},
    });
  }

}
