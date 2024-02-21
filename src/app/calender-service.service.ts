import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './model/Event.model';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Salle } from './model/Salle.model';
import { Empolyer } from './model/Empolyer.model';
import { Manager } from './model/Manager.model';
import { EmailRequest } from './model/EmailRequest.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalenderServiceService {
  event!: Event[];
  apiURL: string = "http://localhost:8088/api/event";
  api: string = "http://localhost:8088/api/salle";
  apiEmp: string = "http://localhost:8088/api/empolyer";
  apiManager: string = "http://localhost:8088/api/manager";
  salle!:Salle[];
  empolyer!:Empolyer[];
  manager!:Manager[];
  emailRequest!:EmailRequest[];
  
  constructor(private http: HttpClient) { }

 // ...

ajouterEvent(ev: Event): Observable<Event> {
  return this.http.post<Event>(this.apiURL, ev, httpOptions)
   
}

// ...

  listeEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiURL);
  }

  supprimerEvent(id :number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterEvent(id:number):Observable<Event>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Event>(url);
  }
  updateEvent(ev:Event):Observable<Event>{
    return this.http.put<Event>(this.apiURL,ev,httpOptions);
}
rechercheParNom(title:string):Observable<Event[]>{
  const url= `${this.apiURL}/title/${title}`;
  return this.http.get<Event[]>(url);
}
historiqueEvent():Observable<Event[]>{
  const url = `${this.apiURL}/historical`;
  return this.http.get<Event[]>(url);
}
listeSalle():Observable<Salle[]>{
  return this.http.get<Salle[]>(this.api);
}
ajouterSalle(sal:Salle):Observable<Salle>{
  return this.http.post<Salle>(this.api, sal, httpOptions);
}
supprimerSalle(id :number) {
  const url = `${this.api}/${id}`;
  return this.http.delete(url, httpOptions);
}
rechercheParNameSalle(salleName:string):Observable<Salle[]>{
const url=`${this.api}/search/${salleName}`;
return this.http.get<Salle[]>(url);
}
listeEmpolyer():Observable<Empolyer[]>{
return this.http.get<Empolyer[]>(this.apiEmp);
}
supprimerEmpolyer(id :number) {
  const url = `${this.apiEmp}/${id}`;
  return this.http.delete(url, httpOptions);
}
ajouterEmpolyer(emp:Empolyer):Observable<Empolyer>{
  return this.http.post<Empolyer>(this.apiEmp, emp,httpOptions);
}
rechercheParNameEmpolyer( nameEmp:string):Observable<Empolyer[]>{
  const url=`${this.apiEmp}/find/${ nameEmp}`;
  return this.http.get<Empolyer[]>(url);
}
// ...

searchEmpByAvailabilityTime(startTime: string, endTime: string): Observable<Empolyer[]> {
  const url = `${this.apiEmp}/searchByAvailabilityTime`;
  const params = {
    startTime,
    endTime
  };

  return this.http.get<Empolyer[]>(url, { params });
}

consulterSalle(id:number):Observable<Salle>{
  const url = `${this.api}/${id}`;
  return this.http.get<Salle>(url);
}
updateSalle(ev:Salle):Observable<Salle>{
  return this.http.put<Salle>(this.api,ev,httpOptions);
}
consulterEmpolyer(id:number):Observable<Empolyer>{
  const url = `${this.apiEmp}/${id}`;
  return this.http.get<Empolyer>(url);
}
updateEmpolyer(emp:Empolyer):Observable<Empolyer>{
  return this.http.put<Empolyer>(this.api,emp,httpOptions);
}
// ...
findSalleByEmployeeCount(numberOfEmployees: number): Observable<Salle[]> {
  const url = `${this.api}/findByEmployeeCount/${numberOfEmployees}`;
  return this.http.get<Salle[]>(url);
}
listeManager(): Observable<Manager[]> {
  return this.http.get<Manager[]>(this.apiManager);
}
supprimerManager(id :number) {
  const url = `${this.apiManager}/${id}`;
  return this.http.delete(url, httpOptions);
}
ajouterManager(manager:Manager):Observable<Manager>{
  return this.http.post<Manager>(this.apiManager, manager,httpOptions);
}
consulterManager(id:number):Observable<Manager>{
  const url = `${this.apiManager}/${id}`;
  return this.http.get<Manager>(url);
}
updateManager(mag:Manager):Observable<Manager>{
  return this.http.put<Manager>(this.apiManager,mag,httpOptions);
}
rechercheParNameManager( nameManager:string):Observable<Manager[]>{
  const url=`${this.apiManager}/find/${ nameManager}`;
  return this.http.get<Manager[]>(url);
}
// ...

// ...

sendEmail(emailRequest: EmailRequest): Observable<any> {
  const url = `${this.apiManager}/send-email`;

  return this.http.post(url, emailRequest, httpOptions)
    .pipe(
      tap((response: any) => {
        console.log('Emails sent successfully:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 200) {
          // Handle the success case here
          console.log('Emails sent successfully:', error.error);
          return of('Emails sent successfully');
        } else {
          // Handle other HTTP errors as usual
          console.error('Failed to send emails:', error);
          return throwError(`Failed to send emails: ${error.statusText}`);
        }
      })
    );
}
}
