import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { DetailSalleComponent } from 'src/app/dialog/detail-salle/detail-salle.component';
import { Salle } from 'src/app/model/Salle.model';

@Component({
  selector: 'app-lister-salle',
  templateUrl: './lister-salle.component.html',
  styleUrls: ['./lister-salle.component.css']
})
export class ListerSalleComponent implements OnInit {
  salles!:Salle[];
constructor(private service: CalenderServiceService, private router: Router, private dialog: MatDialog){}
ngOnInit():void {
  this.chargerSalle();
}
chargerSalle(){
  this.service.listeSalle().subscribe(sal=>{
    console.log(sal);
    this.salles=sal;
  })
}
deleteSalle(salle: Salle) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  
    data: {
      title: 'Confirmation Action',
      message: 'Êtes-vous sûr de vouloir supprimer cet salle ?',
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      if (salle.idSalle) {
        this.service.supprimerSalle(salle.idSalle).subscribe(() => {
          console.log('Salle supprimé');
          this.chargerSalle();
          this.router.navigate(['lister-salle']);
        });
      }
    }
  });
  
}
showDetails(salle: Salle): void {
  const dialogRef = this.dialog.open(DetailSalleComponent, {
    width: '400px',
    data: salle,
  });
}

}
