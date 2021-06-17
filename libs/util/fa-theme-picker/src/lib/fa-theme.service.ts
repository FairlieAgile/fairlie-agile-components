import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StyleManager } from "./style-manager";

@Injectable({
  providedIn: 'root'
})
export class FaThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManager
  ) { }

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>("assets/options.json");
  }

  setTheme(themeToSet: string) {
    this.styleManager.setStyle(
      "theme",
      `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }
}
