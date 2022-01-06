import { Component, OnInit } from '@angular/core';

import { ThemeService } from "src/app/_service/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    this.themeService.setTheme(this.themeService.get());
  }

}
