import { Component } from '@angular/core';
import { Project } from './interfaces/my-projects.interface';
import { MyProjectsService } from './services/my-projects.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {

  title: string = '';
  projects: Project[] = [];

  constructor(private myProjectsService: MyProjectsService){}

  ngOnInit(){
    this.loadData();
  };

  loadData(){
    this.myProjectsService.getMyProjectsInformation()
      .subscribe(
        {
          next: response => {
            this.title = response.title;
            this.projects = response.projects;
          }
        }
      )
  };
}
