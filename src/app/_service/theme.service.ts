import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  themes = ['default', 'green', 'dark'];
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
    // this.document.documentElement.style.setProperty(`--c-primary`, theme['cPrimary']);
    document.documentElement.className = `theme-${name}`;
  }

}
