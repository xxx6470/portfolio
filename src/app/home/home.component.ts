import { Component, OnInit } from '@angular/core';

import { THEMES } from "src/app/_config/theme.config";
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
    return THEMES;
  }

  get themeKeys() {
    return Object.keys(THEMES);
  }

  ngOnInit(): void {
  }

  changeTheme(name: string) {
    this.themeService.setTheme(name);
  }
}
