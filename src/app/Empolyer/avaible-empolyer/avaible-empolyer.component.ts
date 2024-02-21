import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Empolyer } from 'src/app/model/Empolyer.model';

@Component({
  selector: 'app-avaible-empolyer',
  templateUrl: './avaible-empolyer.component.html',
  styleUrls: ['./avaible-empolyer.component.css']
})
export class AvaibleEmpolyerComponent implements OnInit {
  StartTime: Date = new Date();
  EndTime: Date = new Date();
  empolyer!: Empolyer[];

  constructor(private service: CalenderServiceService) {}

  ngOnInit(): void {}

  searchEmpByAvailabilityTime() {
    this.service
      .searchEmpByAvailabilityTime(this.StartTime.toISOString(), this.EndTime.toISOString())
      .subscribe((result: Empolyer[]) => {
        this.empolyer = result;
      });
  }
  
  
}
