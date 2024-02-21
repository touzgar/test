
import { Salle } from 'src/app/model/Salle.model';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-detail-salle',
  templateUrl: './detail-salle.component.html',
  styleUrls: ['./detail-salle.component.css']
})
export class DetailSalleComponent {
  salle!:Salle[];
  constructor(
    public dialogRef: MatDialogRef<DetailSalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Salle
  ){}
  onDownloadClick(): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Salle Details',
      useBom: true,
      noDownload: false,
    };

    // Convert the data object into an array of arrays
    const dataArray: any[][] = [
      ["ID", this.data.idSalle],
      ["Nom Salle", this.data.salleName],
      ["Capacity", this.data.capacity],
     
    ];

    new ngxCsv(dataArray, 'EventDetails', options);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
 
}
