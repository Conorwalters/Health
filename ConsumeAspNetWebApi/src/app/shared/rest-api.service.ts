import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../shared/patient';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { Ailment } from './Ailment';
import { Medication } from './Medication';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'https://localhost:5001/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPatients(){
    return this.http.get(this.apiUrl + '/Patients');
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiUrl + '/Patient/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  createPatient(rawPatient: Patient , ailment: Ailment , medication: Medication): Observable<Patient> {

    const ailments: Array<Ailment> = [{name: ailment.name}];
    const medications: Array<Medication> = [{name: medication.name , doses: medication.doses}];
    const name = rawPatient.name;
    const patientId = 0;
    const finalJson = {ailments, medications, name, patientId};

    return this.http.post<Patient>(this.apiUrl + '/Patients',
                                   JSON.stringify(finalJson) , this.httpOptions);
  }

  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiUrl + '/Patients/' + id, patient, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deletePatient(id: number){
    return this.http.delete<Patient>(this.apiUrl + '/Patients/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
