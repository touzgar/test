import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Empolyer } from 'src/app/model/Empolyer.model';

@Component({
  selector: 'app-empolyer-search',
  templateUrl: './empolyer-search.component.html',
  styleUrls: ['./empolyer-search.component.css']
})
export class EmpolyerSearchComponent implements OnInit {
  titleEmpolyer!:string;
  empolyers!:Empolyer[];
  allEmpolyer!:Empolyer[];
searchTerm!:string;

constructor(private service:CalenderServiceService){}
ngOnInit():void {
  this.service.listeEmpolyer().subscribe(emp=>{
    this.allEmpolyer=emp;
    console.log(emp);
  })
}
rechercherEmpolyer(){
  this.service.rechercheParNameEmpolyer(this.titleEmpolyer).subscribe(emp=>{
    this.empolyers=emp;
    console.log(emp);

  });
}
onkeyUp(filterText:string){
  this.empolyers=this.allEmpolyer.filter(item=>item.nameEmp.toLowerCase().includes(filterText));
}
}
