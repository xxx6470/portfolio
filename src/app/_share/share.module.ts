import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { IconModule } from './icon/icon.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    IconModule,
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    IconModule,
  ],
})
export class ShareModule {
}
