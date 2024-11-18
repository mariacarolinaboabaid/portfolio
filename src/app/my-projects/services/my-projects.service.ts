import { Injectable } from '@angular/core';
import { MyProjects } from '../interfaces/my-projects.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyProjectsService {

  dataPath: string = 'assets/data/my-projects.json';

  constructor(private http: HttpClient) { }

  getMyProjectsInformation(){
    return this.http.get<MyProjects>(this.dataPath);
  }
}
