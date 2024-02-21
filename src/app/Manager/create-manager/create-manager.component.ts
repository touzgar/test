import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Manager } from 'src/app/model/Manager.model';


@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit {
  manager: Manager = new Manager();
  value:string="youremail@gmail.com"
  valuer:string="your name"

constructor(private service: CalenderServiceService,
  private router: Router,
  private dialog: MatDialog ){}
ngOnInit(): void {
    
}
addManager() {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Confirmation',
      message: 'Are you sure to add this manager?',
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      // User clicked 'Yes', proceed with adding the event
      this.service.ajouterManager(this.manager).subscribe(manager => {
        console.log(manager);
      });
      this.router.navigate(['lister-manager']);
    }
  });
}

}
