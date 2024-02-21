import { Component, OnInit } from '@angular/core';
import { CalenderServiceService } from 'src/app/calender-service.service';
import { Event } from 'src/app/model/Event.model';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  titleEvent!: string;
  events!: Event[];
  allEvent!: Event[];
  searchTerm!: string;

  constructor(private service: CalenderServiceService) {}

  ngOnInit(): void {
    this.service.historiqueEvent().subscribe(evs => {
      console.log(evs);
      this.allEvent = evs;
      this.events = evs;
    });
  }

  rechercherProds() {
    if (this.titleEvent) {
      this.service.rechercheParNom(this.titleEvent).subscribe(evs => {
        this.events = evs;
        console.log(evs);
      });
    } else {
      // If the search term is empty, show all events
      this.events = this.allEvent;
    }
  }

  onkeyUp(filterText: string) {
    this.events = this.allEvent.filter(item => item.title?.toLowerCase().includes(filterText));
  }
}
