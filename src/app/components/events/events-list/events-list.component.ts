import { Component, Input, OnInit } from '@angular/core';
import { RaceEvent } from 'src/app/shared/raceevent.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  @Input()
  public events: RaceEvent[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
