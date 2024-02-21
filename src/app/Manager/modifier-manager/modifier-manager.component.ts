import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Manager } from 'src/app/model/Manager.model';

@Component({
  selector: 'app-modifier-manager',
  templateUrl: './modifier-manager.component.html',
  styleUrls: ['./modifier-manager.component.css']
})
export class ModifierManagerComponent implements OnInit {
  currentManager = new Manager();
constructor( private service: CalenderServiceService,
  private route: Router,
  private activateRoute: ActivatedRoute,
  private dialog: MatDialog
){}
ngOnInit(): void{
  this.service.consulterManager(this.activateRoute.snapshot.params['id']).subscribe(mag => {
    this.currentManager = mag;
    console.log(mag);
  });
}
modifierManager(): void {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Confirmation',
      message: 'Are you sure to update this manager?',
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.service.updateManager(this.currentManager).subscribe(() => {
        this.route.navigate(['lister-manager']);
      });
    }
  });
}
}
