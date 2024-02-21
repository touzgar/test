import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { ManagerDetailsComponent } from 'src/app/dialog/manager-details/manager-details.component';
import { Manager } from 'src/app/model/Manager.model';

@Component({
  selector: 'app-lister-manager',
  templateUrl: './lister-manager.component.html',
  styleUrls: ['./lister-manager.component.css']
})
export class ListerManagerComponent implements OnInit {
manager!:Manager[];
constructor(private service: CalenderServiceService, private router: Router, private dialog: MatDialog){}
ngOnInit(): void {
    this.chargerManager();
}
chargerManager(){
  this.service.listeManager().subscribe(mag=>{
    console.log(mag);
    this.manager=mag;
  })
}
deleteManager(manager: Manager) {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  
    data: {
      title: 'Confirmation Action',
      message: 'Êtes-vous sûr de vouloir supprimer cet Manager ?',
    },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      if (manager.idManager) {
        this.service.supprimerManager(manager.idManager).subscribe(() => {
          console.log('Manager supprimé');
          this.chargerManager();
          this.router.navigate(['lister-manager']);
        });
      }
    }
  });
  
}
showDetails(manager: Manager) {
  // Open details dialog and pass the selected employee
  const dialogRef = this.dialog.open(ManagerDetailsComponent, {
    width: '400px',
    data: manager,
  });
}
}
