import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { ThemeService } from "src/app/_service/theme.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
  ) { }

  get localStorageTheme() {
    return this.themeService.get();
  }

  get themes() {
    return this.themeService.themes;
  }

  workExperienceTime(startDate: any, endDate: any = new Date()) {
    const duration = moment.duration(moment(endDate).diff(moment(startDate)));
    const years = duration.years();
    const months = duration.months();
    let res = '';
    if (years > 0) {
      res += `${years} Y`;
    }
    if (months > 0) {
      res += ` ${months} M`;
    }
    return res;
  }

  ngOnInit(): void {
  }

  changeTheme(name: string) {
    this.themeService.setTheme(name);
  }
}
