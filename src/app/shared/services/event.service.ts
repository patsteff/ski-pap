import { Injectable } from '@angular/core';
import { RaceEvent } from '../raceevent.model';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private store: AngularFirestore) { }

  private getDate(date: Date) {
    return moment(date).format();
  }

  onCreateEvent(event: RaceEvent) {
    this.store.collection('events').add({
      location: event.location,
      startDate: this.getDate(event.startDate),
      club: event.club,
      discipline: event.discipline,
      tore: event.tore,
      infos: event.infos
    });
  }

  getEvents() {
    return this.store.collection('events', (ref) => ref.orderBy('startDate')).snapshotChanges();
  }

  onDeleteEvent(id: string) {
    this.store.collection('events').doc(id).delete();
  }
}
