import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Event } from 'src/app/model/Event.model';


@Component({
  selector: 'app-new-event-dialog',
  templateUrl: './new-event-dialog.component.html',
  styleUrls: ['./new-event-dialog.component.css']
})
export class NewEventDialogComponent implements OnInit {
  event: Event = new Event();
  events!:Event[];
  constructor(
    public dialogRef: MatDialogRef<NewEventDialogComponent>,
    private Service: CalenderServiceService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
     
  }
 
  


 // new-event-dialog.component.ts

// ...

saveEvent(): void {
  this.Service.ajouterEvent(this.event).subscribe(
    (evs) => {
      console.log(evs);

      this.snackBar.open('Event created successfully!', 'Close', {
        duration: 3000,
      });

      // Emit 'saved' as a result
      this.dialogRef.close('saved');
    },
    (error) => {
      console.error('Error creating event:', error);

      this.snackBar.open('Error creating event. Please try again.', 'Close', {
        duration: 3000,
      });
    }
  );
}

// ...
   closeDialog(): void {
    this.dialogRef.close();
  }
}
