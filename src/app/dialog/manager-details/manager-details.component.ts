import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ngxCsv } from 'ngx-csv';
import { Manager } from 'src/app/model/Manager.model';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent {
  manager!:Manager[];
  constructor(
    public dialogRef: MatDialogRef<ManagerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDownloadClick(): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Manager Details',
      useBom: true,
      noDownload: false,
     };
  
    // Convert the data object into an array of arrays
    const dataArray: any[][] = [
      ["ID", this.data.idManager],
      ["Name", this.data.nameManager],
      ["Email", this.data.mailManager],
      ];
  
    new ngxCsv(dataArray, 'ManagerDetails', options);
  }
  
  

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
