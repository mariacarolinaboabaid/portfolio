import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProfessionalExperienceComponent,
    EducationComponent,
    ContactComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
