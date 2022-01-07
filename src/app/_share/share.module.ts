import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { IconModule } from './icon/icon.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [
    CommonModule,
    IconModule,
  ],
})
export class ShareModule {
}
