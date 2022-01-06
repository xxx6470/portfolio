import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { THEMES } from "src/app/_config/theme.config";

@Injectable({
  providedIn: "root"
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  localStorageName = "theme";
  localStorageDefault = "default";

  set(name: string) {
    localStorage.setItem(this.localStorageName, name);
  }

  get() {
    const theme = localStorage.getItem(this.localStorageName);
    if (theme == null) {
      this.set(this.localStorageDefault);
    }
    return theme == null ? this.localStorageDefault : theme;
  }

  setTheme(name: string) {

    this.set(name);

    const theme = THEMES[name];

    this.document.documentElement.style.setProperty(`--c-primary`, theme['cPrimary']);
    this.document.documentElement.style.setProperty(`--c-light`, theme['cLight']);
    this.document.documentElement.style.setProperty(`--c-dark`, theme['cDark']);

    this.document.documentElement.style.setProperty(`--app-background`, theme['background']);
    this.document.documentElement.style.setProperty(`--app-header-background`, theme['headerBackground']);

    this.document.documentElement.style.setProperty(`--app-text-primary`, theme['textPrimary']);
    this.document.documentElement.style.setProperty(`--app-text-secondary`, theme['textSecondary']);
    this.document.documentElement.style.setProperty(`--app-text-tertiary`, theme['textTertiary']);

    this.document.documentElement.style.setProperty(`--link-color`, theme['linkColor']);
    this.document.documentElement.style.setProperty(`--link-color-hover`, theme['linkColorHover']);
    this.document.documentElement.style.setProperty(`--link-color-active`, theme['linkColorActive']);

    // Object.keys(theme).forEach((key) => {
    //   this.document.documentElement.style.setProperty(`--${key}`, theme[key]);
    // });
  }

}
