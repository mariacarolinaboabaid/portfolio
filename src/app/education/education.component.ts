import { Component } from '@angular/core';
import { EducationService } from './services/education.service';
import { Formation } from './interfaces/education.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  title: string = '';
  formations: Formation[] = [];

  constructor(private educationService: EducationService){}

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.educationService.getEducationInformation()
    .subscribe(
      {
        next: response => {
          this.title = response.title;
          this.formations = response.formations;
        }
      }
    )
  };
}
