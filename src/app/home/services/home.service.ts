import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Home } from '../interfaces/home.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  dataPath: string = 'assets/data/home.json';

  constructor(private http: HttpClient) { }

  getHomeInformation(){
    return this.http.get<Home>(this.dataPath);
  }
}
