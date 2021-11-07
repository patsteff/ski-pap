import { Component, Input, OnInit } from '@angular/core';
import { RaceEvent } from 'src/app/shared/raceevent.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input()
  public event: RaceEvent | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
