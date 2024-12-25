import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';

import { ThemeService } from "src/app/_service/theme.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
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

  isIntersecting(status: boolean, index: number) {
    console.log('Element #' + index + ' is intersecting ' + status)
  }

  changeTheme(name: string) {
    this.themeService.setTheme(name);
  }

  openSwmConsoleDialog() {
    this.dialog.open(SwmConsoleDialogComponent, {
      minHeight: '85vh',
      maxHeight: '85vh',
    });
  }

  openHipowerPedestrainFlowDialog() {
    this.dialog.open(HipowerPedestrainFlowDialogComponent, {
      // minHeight: '85vh',
      // maxHeight: '85vh',
    });
  }

  openHipowerRockfallDialog() {
    this.dialog.open(HipowerRockfallDialogComponent, {
      minHeight: '65vh',
      maxHeight: '85vh',
      maxWidth: '600px',
    });
  }

  openHipowerTrafficFlowDialog() {
    this.dialog.open(HipowerTrafficFlowDialogComponent, {
      minHeight: '85vh',
      maxHeight: '85vh',
    });
  }

  openHipowerOtherDialog() {
    this.dialog.open(HipowerOtherDialogComponent, {
      minHeight: '85vh',
      maxHeight: '85vh',
      maxWidth: '600px',
    });
  }
}

@Component({
  selector: 'app-swm-console-dialog',
  templateUrl: './work-experience/swm-console-dialog.component.html',
  styleUrls: ['./work-experience/work-dialog.component.scss']
})
export class SwmConsoleDialogComponent { }

@Component({
  selector: 'app-hipower-pedestrain-flow-dialog',
  templateUrl: './work-experience/hipower-pedestrain-flow-dialog.component.html',
  styleUrls: ['./work-experience/work-dialog.component.scss']
})
export class HipowerPedestrainFlowDialogComponent { }

@Component({
  selector: 'app-hipower-rockfall-dialog',
  templateUrl: './work-experience/hipower-rockfall-dialog.component.html',
  styleUrls: ['./work-experience/work-dialog.component.scss']
})
export class HipowerRockfallDialogComponent { }

@Component({
  selector: 'app-hipower-traffic-flow-dialog',
  templateUrl: './work-experience/hipower-traffic-flow-dialog.component.html',
  styleUrls: ['./work-experience/work-dialog.component.scss']
})
export class HipowerTrafficFlowDialogComponent { }

@Component({
  selector: 'app-hipower-other-dialog',
  templateUrl: './work-experience/hipower-other-dialog.component.html',
  styleUrls: ['./work-experience/work-dialog.component.scss']
})
export class HipowerOtherDialogComponent { }
