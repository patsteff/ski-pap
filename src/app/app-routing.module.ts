import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthletesComponent } from './components/athletes/athletes.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  { path: 'athletes', component: AthletesComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
