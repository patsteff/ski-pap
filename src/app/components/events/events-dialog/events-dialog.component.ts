import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RaceEvent } from 'src/app/shared/raceevent.model';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-events-dialog',
  templateUrl: './events-dialog.component.html'
})
export class EventsDialogComponent {

  form: FormGroup = this.fb.group(MAT_DIALOG_DATA);

  constructor(public dialogRef: MatDialogRef<EventsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: RaceEvent,
    private fb: FormBuilder, private eventService: EventService
  ) {
    this.form = fb.group({
      location: [data.location, [Validators.maxLength(30), Validators.required]],
      startDate: [data.startDate, Validators.required],
      club: ["BSV"],
      infos: [data.infos, Validators.maxLength(100)],
      discipline: [data.discipline],
      tore: [data.tore, [Validators.required, Validators.max(500), Validators.pattern('[0-9]*$')]],
      id: [data.id],
    });
  }

  onSave() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
    console.log(this.form.value);
    this.eventService.onCreateEvent(this.form.value)

  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
