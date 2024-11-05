import { Component, HostListener } from '@angular/core';
import { NavService } from './services/nav.service';
import { NavLink } from './interfaces/nav.interface';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navLinks: NavLink[] = [];
  showLinksMobileState: boolean = false;

  constructor(
    private router: Router,
    private navService: NavService,
    private translate: TranslateService) {
      this.translate.setDefaultLang('pt');
   }

  ngOnInit() {
    this.loadData();
  };

  loadData() {
    this.navService.getNavData()
      .subscribe({
          next: response => this.navLinks = response.navLinks
      })
  };

  redirectToHome() {
    this.router.navigate(['home']);
  };

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    this.translate.use(selectedLanguage);
  };

  changeShowLinksMobile(){
    this.showLinksMobileState = !this.showLinksMobileState;
  };

  changeLanguageMobile(event: Event) {
    this.changeLanguage(event);
    this.changeShowLinksMobile();
  };
}
