import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Empolyer } from 'src/app/model/Empolyer.model';

@Component({
  selector: 'app-modifier-empolyer',
  templateUrl: './modifier-empolyer.component.html',
  styleUrls: ['./modifier-empolyer.component.css']
})
export class ModifierEmpolyerComponent implements OnInit {
  currentEmpolyer = new Empolyer();

  constructor(
    private activateRoute: ActivatedRoute,
    private service: CalenderServiceService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.consulterEmpolyer(this.activateRoute.snapshot.params['id']).subscribe(emp => {
      this.currentEmpolyer = emp;
      console.log(emp);
    });
  }

  modifierEmpolyer(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure to update this employee?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.updateEmpolyer(this.currentEmpolyer).subscribe(() => {
          this.router.navigate(['lister-empolyer']);
        });
      }
    });
  }
}
