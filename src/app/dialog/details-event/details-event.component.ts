import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { Event } from 'src/app/model/Event.model';


@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent {
  event!:Event[];
  constructor(
    public dialogRef: MatDialogRef<DetailsEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event
  ) {}

  onDownloadClick(): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Event Details',
      useBom: true,
      noDownload: false,
    };

    // Convert the data object into an array of arrays
    const dataArray: any[][] = [
      ["ID", this.data.id],
      ["Nom Event", this.data.title],
      ["Location", this.data.location],
      ["Event Start", this.data.startTime],
      ["Event End", this.data.endTime]
    ];

    new ngxCsv(dataArray, 'EventDetails', options);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
