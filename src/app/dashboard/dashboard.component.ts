import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  siteLanguage = 'English';
  languageList = [
    { code: 'en-US', label: 'English' },
    { code: 'zh-TW', label: '繁體中文' },
  ];

  constructor(
    private translate: TranslateService
  ) {
    let lang = localStorage.getItem('translate');
    if (lang == null) {
      translate.setDefaultLang('en-US');
      translate.use('en-US');
    } else {
      translate.use(lang);
    }
  }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();
    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
      localStorage.setItem('translate', localeCode);
    }
  }

  ngOnInit(): void {
  }
}
