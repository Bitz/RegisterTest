import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Yes, a service approach may be overkill for what I think is a quick and dirty form post- but this test is more about what I could do, right?
//In a real life application, I wouldnt use httpclient in the constructor.
export class RegisterService {

  constructor(private http: HttpClient) { }

  addRegistration(register: Registration): Observable<RegistrationResponse> {
    const params = new HttpParams().set('key', myKey);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { params: params, headers: headers };
    return this.http.post<RegistrationResponse>(localUrl, register, options);
  }
}

export class Registration {
  public firstName: string;
  public lastName: string;
  public state: string;
  public email: string;
  public subscribe: boolean;
}


export class RegistrationResponse extends Registration {
  public id: string;
}


//Assume that in reality we are storing this in our secrets file.
const localUrl = 'https://codingexercise.speakcore.com/api/registrations';
const myKey = 'me@brandonm.us';

