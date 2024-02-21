import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Event } from 'src/app/model/Event.model';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  currentEvent = new Event();

  constructor(
    private activateRoute: ActivatedRoute,
    private service: CalenderServiceService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.consulterEvent(this.activateRoute.snapshot.params['id']).subscribe(evs => {
      this.currentEvent = evs;
      console.log(evs);
    });
  }

  modifierEvent(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure to update this event?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.updateEvent(this.currentEvent).subscribe(() => {
          this.router.navigate(['lister']);
        });
      }
    });
  }
}
