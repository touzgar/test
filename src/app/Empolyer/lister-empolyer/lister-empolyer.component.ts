import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { DetailsDialogComponent } from 'src/app/dialog/details-dialog/details-dialog.component';
import { Empolyer } from 'src/app/model/Empolyer.model';

@Component({
  selector: 'app-lister-empolyer',
  templateUrl: './lister-empolyer.component.html',
  styleUrls: ['./lister-empolyer.component.css']
})
export class ListerEmpolyerComponent implements OnInit {
  empolyer!:Empolyer[];
constructor(private service:CalenderServiceService, private router: Router, private dialog: MatDialog){}
ngOnInit():void {
  this.chargerEmpolyer();
}
chargerEmpolyer(){
  this.service.listeEmpolyer().subscribe(emp=>{
    this.empolyer=emp;
    console.log(emp);
  })
}
deleteEmpolyer(emp: Empolyer) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  
    data: {
      title: 'Confirmation Action',
      message: 'Êtes-vous sûr de vouloir supprimer cet empolyer ?',
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      if (emp.idEmp) {
        this.service.supprimerEmpolyer(emp.idEmp).subscribe(() => {
          console.log('Empolyer supprimé');
          this.chargerEmpolyer();
          this.router.navigate(['lister-empolyer']);
        });
      }
    }
  });
  
}
showDetails(emp: Empolyer) {
  // Open details dialog and pass the selected employee
  const dialogRef = this.dialog.open(DetailsDialogComponent, {
    width: '400px',
    data: emp,
  });
}
}
