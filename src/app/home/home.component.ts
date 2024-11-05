import { Component } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  greeting: string = '';
  role: string = '';
  expertise: string = '';
  learning: string = '';
  hardSkills: string[] = [];
  softSkills: string[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadData();
  };

  loadData() {
    this.homeService.getHomeInformation()
      .subscribe({
        next: response => {
          this.greeting = response.greeting;
          this.role = response.role;
          this.expertise = response.expertise;
          this.learning = response.learning;
          this.hardSkills = response.hard_skills;
          this.softSkills = response.soft_skills;
        }
    })
  };
}
