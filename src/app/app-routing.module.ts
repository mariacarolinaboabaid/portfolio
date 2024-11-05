import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'professional-experience', component: ProfessionalExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'contact', component: ContactComponent },
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
