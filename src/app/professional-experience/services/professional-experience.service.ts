import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfessionalExperience } from '../interfaces/professional-experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalExperienceService {

  dataPath: string = 'assets/data/professional-experience.json';

  constructor(private http: HttpClient) { }

  getProfessionalExperinceInformation(){
    return this.http.get<ProfessionalExperience>(this.dataPath);
  };
}
