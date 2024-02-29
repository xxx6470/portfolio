import { NgModule } from "@angular/core";

import { LanguageIconComponent } from "./language-icon/language-icon.component";
import { MailIconComponent } from "./mail-icon/mail-icon.component";

@NgModule({
  declarations: [
    LanguageIconComponent,
    MailIconComponent,
  ],
  imports: [],
  exports: [
    LanguageIconComponent,
    MailIconComponent,
  ],
})
export class IconModule {
}
