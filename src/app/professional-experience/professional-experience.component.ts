import { Component } from '@angular/core';
import { ProfessionalExperienceService } from './services/professional-experience.service';
import { Experience } from './interfaces/professional-experience.interface';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent {

  title: string = "";
  experiences: Experience[] = [];

  constructor(private professionalExperienceService: ProfessionalExperienceService){}

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.professionalExperienceService.getProfessionalExperinceInformation()
      .subscribe(
        {
          next: response => {
            this.title = response.title;
            this.experiences = response.professionalExperience;
          }
        }
      )
  }

}