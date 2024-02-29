import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'icon-language',
  templateUrl: './language-icon.svg',
  styleUrls: ['../icon.component.scss']
})
export class LanguageIconComponent {

  @Input('class') customClassName = '';
  @HostBinding('class')

  get hostClasses() {
    return [
      'icon',
      this.customClassName,
    ].join(' ');
  }
}
