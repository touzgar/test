import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Manager } from 'src/app/model/Manager.model';

@Component({
  selector: 'app-search-manager',
  templateUrl: './search-manager.component.html',
  styleUrls: ['./search-manager.component.css']
})
export class SearchManagerComponent implements OnInit {
  titleManager!:string;
  managers!:Manager[];
  allManager!:Manager[];
searchTerm!:string;

  constructor(private service:CalenderServiceService){}
ngOnInit(): void {
  this.service.listeManager().subscribe(mag=>{
    this.allManager=mag;
    console.log(mag);
  });
}
rechercheSalle(){
  this.service.rechercheParNameManager(this.titleManager).subscribe(mag=>{
    console.log(mag);
    this.managers=mag;
  });
}
onkeyUp(filterText:string){
  this.managers=this.allManager.filter(item=>item.nameManager?.toLowerCase().includes(filterText));
}

}
