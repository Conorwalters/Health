import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { Patient } from '../shared/patient';
import { Ailment } from '../shared/Ailment';
import { Medication } from '../shared/Medication';

@Component({
  selector: 'app-patients-create',
  templateUrl: './patients-create.component.html',
  styleUrls: ['./patients-create.component.scss']
})
export class PatientsCreateComponent implements OnInit {
   patientDetails: Patient;
   ailment: Ailment;
   medication: Medication;
   @Input() patientName: string;
   @Input() ailmentName: string;
   @Input() medicationName: string;
   @Input() medicationDoses: string;

  constructor(
    public restApi: RestApiService,
    public router: Router) {
      this.ailment = {name: 'test'};
      this.medication = {name: 'test', doses: 'test'};
      this.patientDetails = {name: 'test'};
        }

ngOnInit() {
  }

addPatient() {
    this.ailment.name = this.ailmentName;
    this.medication.name = this.medicationName;
    this.medication.doses = this.medicationDoses;
    this.patientDetails.name = this.patientName;
    this.restApi.createPatient(this.patientDetails , this.ailment , this.medication).subscribe(() => {
    });
    this.router.navigate(['/patient-list']);
  }
}
