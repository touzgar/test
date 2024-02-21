import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Salle } from 'src/app/model/Salle.model';

@Component({
  selector: 'app-create-salle',
  templateUrl: './create-salle.component.html',
  styleUrls: ['./create-salle.component.css']
})
export class CreateSalleComponent implements OnInit {
  salle: Salle = new Salle();
constructor(private service:CalenderServiceService,private route:Router, private dialog: MatDialog ){}
ngOnInit():void {
}
addSalle() {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Confirmation',
      message: 'Are you sure to add this event?',
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.service.ajouterSalle(this.salle).subscribe(sal=>{
        console.log("sucess");
        this.salle=sal;
      })
      this.route.navigate(['lister-salle']);
    }
  });
}
}
