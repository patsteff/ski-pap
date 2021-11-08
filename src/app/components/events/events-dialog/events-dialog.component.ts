import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RaceEvent } from 'src/app/shared/raceevent.model';

@Component({
  selector: 'app-events-dialog',
  templateUrl: './events-dialog.component.html',
  styleUrls: ['./events-dialog.component.scss']
})
export class EventsDialogComponent {

  form: FormGroup = this.fb.group(MAT_DIALOG_DATA);

  constructor(public dialogRef: MatDialogRef<EventsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: RaceEvent,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      location: [data.location, [Validators.maxLength(30), Validators.required]],
      startDate: [data.startDate, Validators.required],
      infos: [data.infos, Validators.maxLength(100)],
      id: [data.id],
    });
  }

  onSave() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
