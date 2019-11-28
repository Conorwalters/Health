import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Observable } from 'rxjs';
import { Patient } from '../shared/patient';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  patient;

  constructor(
    private restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadPatients();
  }

  // Get Patients list
  loadPatients() {
    return this.restApi.getPatients().subscribe((data) => {
      this.patient = data;
    });
  }

  // Delete patient
  deletePatient(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deletePatient(id).subscribe(data => {
        this.loadPatients();
      })
    }
  }
}
