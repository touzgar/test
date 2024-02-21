import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Salle } from 'src/app/model/Salle.model';

@Component({
  selector: 'app-modifier-salle',
  templateUrl: './modifier-salle.component.html',
  styleUrls: ['./modifier-salle.component.css']
})
export class ModifierSalleComponent implements OnInit {
  constructor(
    private service: CalenderServiceService,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}
  
  currentSalle = new Salle();

  ngOnInit(): void {
    this.service.consulterSalle(this.activateRoute.snapshot.params['id']).subscribe(sal => {
      this.currentSalle = sal;
      console.log(sal);
    });
  }

  modifierSalle(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure to update this room?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.updateSalle(this.currentSalle).subscribe(() => {
          this.route.navigate(['lister-salle']);
        });
      }
    });
  }
}
