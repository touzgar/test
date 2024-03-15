import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './Event/create-event/create-event.component';
import { ListerComponent } from './Event/lister/lister.component';
import { ModifierComponent } from './Event/modifier/modifier.component';
import { SearchComponent } from './Event/search/search.component';
import { CalenderComponent } from './calender/calender.component';
import { CreateSalleComponent } from './Salle/create-salle/create-salle.component';
import { ListerSalleComponent } from './Salle/lister-salle/lister-salle.component';
import { ModifierSalleComponent } from './Salle/modifier-salle/modifier-salle.component';
import { SalleSearchComponent } from './Salle/salle-search/salle-search.component';
import { CreateEmpolyerComponent } from './Empolyer/create-empolyer/create-empolyer.component';
import { ListerEmpolyerComponent } from './Empolyer/lister-empolyer/lister-empolyer.component';
import { ModifierEmpolyerComponent } from './Empolyer/modifier-empolyer/modifier-empolyer.component';
import { EmpolyerSearchComponent } from './Empolyer/empolyer-search/empolyer-search.component';
import { AvaibleEmpolyerComponent } from './Empolyer/avaible-empolyer/avaible-empolyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { HistoriqueComponent } from './Event/historique/historique.component';
import { DetailsDialogComponent } from './dialog/details-dialog/details-dialog.component'; // Create a separate component for the confirmation dialog
import { FileDownloadService } from 'src/app/file-download.service';
import { DetailsEventComponent } from './dialog/details-event/details-event.component';
import { DetailSalleComponent } from './dialog/detail-salle/detail-salle.component';
import { FindSalleByEmployeeCountComponent } from './Salle/find-salle-by-employee-count/find-salle-by-employee-count.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NewEventDialogComponent } from './dialog/new-event-dialog/new-event-dialog.component';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateManagerComponent } from './Manager/create-manager/create-manager.component';
import { ListerManagerComponent } from './Manager/lister-manager/lister-manager.component';
import { SearchManagerComponent } from './Manager/search-manager/search-manager.component';
import { ManagerDetailsComponent } from './dialog/manager-details/manager-details.component';
import { ModifierManagerComponent } from './Manager/modifier-manager/modifier-manager.component';
import { EmailTestComponent } from './Manager/email-test/email-test.component';
import { ToastrModule } from 'ngx-toastr';
import { TestComponent } from './Manager/test/test.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './gark/forbidden/forbidden.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    ListerComponent,
    ModifierComponent,
    SearchComponent,
    CalenderComponent,
    CreateSalleComponent,
    ListerSalleComponent,
    ModifierSalleComponent,
    SalleSearchComponent,
    CreateEmpolyerComponent,
    ListerEmpolyerComponent,
    ModifierEmpolyerComponent,
    EmpolyerSearchComponent,
    AvaibleEmpolyerComponent,
    ConfirmDialogComponent,
    HistoriqueComponent,
    DetailsDialogComponent,
    DetailsEventComponent,
    DetailSalleComponent,
    FindSalleByEmployeeCountComponent,
    NewEventDialogComponent,
    CreateManagerComponent,
    ListerManagerComponent,
    SearchManagerComponent,
    ManagerDetailsComponent,
    ModifierManagerComponent,
    EmailTestComponent,
    TestComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatInputModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    
   
  ],
  providers: [FileDownloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
