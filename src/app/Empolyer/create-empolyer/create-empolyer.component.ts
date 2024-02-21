import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Empolyer } from 'src/app/model/Empolyer.model';

@Component({
  selector: 'app-create-empolyer',
  templateUrl: './create-empolyer.component.html',
  styleUrls: ['./create-empolyer.component.css']
})
export class CreateEmpolyerComponent implements OnInit {
  empolyer:Empolyer=new Empolyer();
constructor(private service:CalenderServiceService,private route:Router, private dialog: MatDialog){}
ngOnInit():void {}
addEmpolyer() {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Confirmation',
      message: 'Are you sure to add this empolyer?',
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.service.ajouterEmpolyer(this.empolyer).subscribe(emp=>{
        console.log("sucess");
        this.empolyer=emp;
      })
      this.route.navigate(['lister-empolyer']);
    }
  });
}

}
