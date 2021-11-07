import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events = ["test", "test2"];

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log("open dialogue")
  }

}
