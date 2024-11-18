import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from '../interfaces/education.interface';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  dataPath: string = 'assets/data/education.json';

  constructor(private http: HttpClient) { }

  getEducationInformation(){
    return this.http.get<Education>(this.dataPath);
  };
}
