import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment as env} from '../../environments/environment.development';
import Education from "../models/education";

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  readonly baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = env.api;
  }

  public getStudentProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profiles/me`);
  }

  public addEducation(profileId:string, education: Education): Observable<any> {
    return this.http.post(`${this.baseUrl}/profiles/${profileId}/educations`, education);
  }



}