import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Salle } from 'src/app/model/Salle.model';

@Component({
  selector: 'app-salle-search',
  templateUrl: './salle-search.component.html',
  styleUrls: ['./salle-search.component.css']
})
export class SalleSearchComponent implements OnInit {
  titleSalle!:string;
  salles!:Salle[];
  allSalle!:Salle[];
searchTerm!:string;

constructor(private service:CalenderServiceService){}
ngOnInit():void {
  this.service.listeSalle().subscribe(sal=>{
    this.allSalle=sal;
    console.log(sal);
  });

}
rechercheSalle(){
  this.service.rechercheParNameSalle(this.titleSalle).subscribe(sal=>{
    console.log(sal);
    this.salles=sal;
  });
}
onkeyUp(filterText:string){
  this.salles=this.allSalle.filter(item=>item.salleName?.toLowerCase().includes(filterText));
}
}
