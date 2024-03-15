import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { AvaibleEmpolyerComponent } from './Empolyer/avaible-empolyer/avaible-empolyer.component';
import { CreateEmpolyerComponent } from './Empolyer/create-empolyer/create-empolyer.component';
import { EmpolyerSearchComponent } from './Empolyer/empolyer-search/empolyer-search.component';
import { ListerEmpolyerComponent } from './Empolyer/lister-empolyer/lister-empolyer.component';
import { ModifierEmpolyerComponent } from './Empolyer/modifier-empolyer/modifier-empolyer.component';
import { CreateEventComponent } from './Event/create-event/create-event.component';
import { HistoriqueComponent } from './Event/historique/historique.component';
import { ListerComponent } from './Event/lister/lister.component';
import { ModifierComponent } from './Event/modifier/modifier.component';
import { SearchComponent } from './Event/search/search.component';
import { ForbiddenComponent } from './gark/forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { CreateManagerComponent } from './Manager/create-manager/create-manager.component';
import { EmailTestComponent } from './Manager/email-test/email-test.component';
import { ListerManagerComponent } from './Manager/lister-manager/lister-manager.component';
import { ModifierManagerComponent } from './Manager/modifier-manager/modifier-manager.component';
import { SearchManagerComponent } from './Manager/search-manager/search-manager.component';
import { TestComponent } from './Manager/test/test.component';
import { RegisterComponent } from './register/register.component';
import { CreateSalleComponent } from './Salle/create-salle/create-salle.component';
import { FindSalleByEmployeeCountComponent } from './Salle/find-salle-by-employee-count/find-salle-by-employee-count.component';
import { ListerSalleComponent } from './Salle/lister-salle/lister-salle.component';
import { ModifierSalleComponent } from './Salle/modifier-salle/modifier-salle.component';
import { SalleSearchComponent } from './Salle/salle-search/salle-search.component';
import { UserGuard } from './userguard.guard';

const routes: Routes = [
  {path:'create-event',component:CreateEventComponent,canActivate:[UserGuard]},
  {path:'lister',component:ListerComponent},
  { path: 'modifier/:id', component: ModifierComponent },
  {path:'Search',component:SearchComponent},
  {path:'calender',component:CalenderComponent},
  {path:'create-salle',component:CreateSalleComponent},
  {path:'lister-salle',component:ListerSalleComponent},
  {path:'modifier-salle/:id',component:ModifierSalleComponent},
  {path:'salle-search',component:SalleSearchComponent},
  {path:'create-empolyer',component:CreateEmpolyerComponent},
  {path:'lister-empolyer',component:ListerEmpolyerComponent},
  {path:'modifier-empolyer/:id',component:ModifierEmpolyerComponent},
  {path:'empolyer-search',component:EmpolyerSearchComponent},
  {path:'avaible-empolyer',component:AvaibleEmpolyerComponent},
  {path:'historique',component:HistoriqueComponent},
  {path:'find-salle',component:FindSalleByEmployeeCountComponent},
  {path:'create-manager',component:CreateManagerComponent},
  {path:'lister-manager',component:ListerManagerComponent},
  {path:'search-manager',component:SearchManagerComponent},
  {path:'modifier-manager/:id',component:ModifierManagerComponent},
  {path:'email-test',component:EmailTestComponent},
  {path:'test',component:TestComponent},
  {path:'login',component:LoginComponent},
  {path:'app-forbidden',component:ForbiddenComponent},
  {path:'register',component:RegisterComponent},
  { path: '', redirectTo: '/calender', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
