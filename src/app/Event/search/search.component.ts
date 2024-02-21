import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Event } from 'src/app/model/Event.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  titleEvent!:string;
  events!:Event[];
  allEvent!:Event[];
searchTerm!:string;


constructor( private service: CalenderServiceService,
    private router: Router,
    private dialog: MatDialog // Inject MatDialog
  ){}
ngOnInit():void {
  this.service.listeEvent().subscribe(evs=>{
    this.allEvent=evs;
    console.log(evs);
  });

}
rechercherProds(){
  this.service.rechercheParNom(this.titleEvent).subscribe(evs=>{
    this.events=evs;
    console.log(evs);

  });
}
onkeyUp(filterText:string){
  this.events=this.allEvent.filter(item=>item.title?.toLowerCase().includes(filterText));
}




}
