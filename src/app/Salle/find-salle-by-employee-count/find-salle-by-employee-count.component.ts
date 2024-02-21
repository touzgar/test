// find-salle-by-employee-count.component.ts

import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Salle } from 'src/app/model/Salle.model';

@Component({
  selector: 'app-find-salle-by-employee-count',
  templateUrl: './find-salle-by-employee-count.component.html',
  styleUrls: ['./find-salle-by-employee-count.component.css']
})
export class FindSalleByEmployeeCountComponent implements OnInit {
  salleList: Salle[] = [];
  error: string | null = null;
  numberOfEmployees: number = 0;

  constructor(private service: CalenderServiceService) {}

  ngOnInit(): void {}

  searchByEmployeeCount(): void {
    this.service.findSalleByEmployeeCount(this.numberOfEmployees)
      .subscribe(
        (salleList) => {
          this.salleList = salleList;
        },
        (error) => {
          this.error = error.message || 'An error occurred.';
        }
      );
  }
}
