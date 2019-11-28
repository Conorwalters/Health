import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsCreateComponent } from './patients-create/patients-create.component';
import { PatientsListComponent } from './patients-list/patients-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'create-patient'},
  {path: 'create-patient', component: PatientsCreateComponent},
  {path: 'patient-list', component: PatientsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
