import { Component, OnInit } from '@angular/core';

import { ThemeService } from "src/app/_service/theme.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
  ) { }

  get localStorageTheme() {
    return this.themeService.get();
  }

  get themes() {
    return this.themeService.themes;
  }

  changeTheme(name: string) {
    this.themeService.setTheme(name);
  }

  ngOnInit(): void {
  }

}
