import { Injectable } from '@angular/core';
import { Nav} from '../interfaces/nav.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  dataPath: string = 'assets/data/nav.json';

  constructor(private http: HttpClient) { }

  getNavData() {
    return this.http.get<Nav>(this.dataPath);
  };
}
