import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { Empolyer } from '../../model/Empolyer.model';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css'],
})
export class DetailsDialogComponent {
  empolyer!:Empolyer[];
  constructor(
    public dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDownloadClick(): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Employee Details',
      useBom: true,
      noDownload: false,
     };
  
    // Convert the data object into an array of arrays
    const dataArray: any[][] = [
      ["ID", this.data.idEmp],
      ["Name", this.data.nameEmp],
      ["Email", this.data.email],
      ["Available Time Start", this.data.availbility_start_time],
      ["Available Time End", this.data.availbility_end_time]
    ];
  
    new ngxCsv(dataArray, 'EmployeeDetails', options);
  }
  
  

  onCloseClick(): void {
    this.dialogRef.close();
  }
  
}
