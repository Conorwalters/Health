import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PatientsCreateComponent } from './patients-create/patients-create.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsCreateComponent,
    PatientsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
