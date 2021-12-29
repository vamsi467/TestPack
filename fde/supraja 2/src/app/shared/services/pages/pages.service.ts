import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  ParamMap,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";
import { filter } from "rxjs/operators";

@Injectable()
export class PageService {
  previousRoute: string;
  currentRoute: string;
  constructor(private router: Router) {
    this.currentRoute = this.router.url;
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
      } else if (e instanceof NavigationEnd) {
        this.previousRoute = this.currentRoute;
        this.currentRoute = e.url;
        if (e.url === "/") {
          this.navigateToPage("login");
        }
      } else if (e instanceof NavigationCancel) {
      } else if (e instanceof NavigationError) {
      }
    });
  }

  navigateToPage(pathTo: string) {
    this.router.navigate([pathTo]);
  }
}
