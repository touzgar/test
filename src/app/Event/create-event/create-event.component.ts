import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Event } from 'src/app/model/Event.model';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component'; // Import your ConfirmDialogComponent

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: Event = new Event();
  
  constructor(
    private service: CalenderServiceService,
    private router: Router,
    private dialog: MatDialog // Inject MatDialog
  ) {}

  ngOnInit(): void {}

  addEvent() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure to add this event?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User clicked 'Yes', proceed with adding the event
        this.service.ajouterEvent(this.event).subscribe(ev => {
          console.log(ev);
        });
        this.router.navigate(['lister']);
      }
    });
  }
}
