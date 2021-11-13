import { Component, Input, OnInit } from '@angular/core';
import { RaceEvent } from 'src/app/shared/raceevent.model';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent implements OnInit {

  @Input()
  public event: RaceEvent | undefined;


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  editEvent() {
    console.log("edit");
  }

  deleteEvent() {
    console.log("delete");
    this.eventService.onDeleteEvent(this.event?.id!);
  }
}
