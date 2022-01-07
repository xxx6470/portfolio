import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'icon-mail',
  templateUrl: './mail-icon.svg',
  styleUrls: ['../icon.component.scss']
})
export class MailIconComponent {

  @Input('class') customClassName = '';
  @HostBinding('class')

  get hostClasses() {
    return [
      'icon',
      this.customClassName,
    ].join(' ');
  }
}
