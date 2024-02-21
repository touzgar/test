import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { DetailsEventComponent } from 'src/app/dialog/details-event/details-event.component';
import { Event } from 'src/app/model/Event.model';


@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {
  events!:Event[];
  constructor(private service: CalenderServiceService,
              private router: Router,
              private dialog: MatDialog,
              private toastr: ToastrService) {}


  ngOnInit():void {
    this.chargerEvent();
  }
  chargerEvent() {
    this.service.listeEvent().subscribe(evs => {
      console.log(evs);
      this.events = evs;
      this.checkEventTimes();
    });
  }
  checkEventTimes() {
    const now = new Date();
  
    this.events.forEach(event => {
      // Check if startTime is defined
      if (event.startTime) {
        const eventStartTime = new Date(event.startTime);
  
        if (eventStartTime > now) {
          // Time has come for the event, show a notification
          this.toastr.success(`It's time for ${event.title}!`);
        }
      }
    });
  }
   

deleteEvent(event: Event) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  
    data: {
      title: 'Confirmation Action',
      message: 'Êtes-vous sûr de vouloir supprimer cet événement ?',
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      if (event.id) {
        this.service.supprimerEvent(event.id).subscribe(() => {
          console.log('Événement supprimé');
          this.chargerEvent();
          this.router.navigate(['lister']);
        });
      }
    }
  });
  
}
showDetails(event: Event): void {
  const dialogRef = this.dialog.open(DetailsEventComponent, {
    width: '400px',
    data: event,
  });
}

}
