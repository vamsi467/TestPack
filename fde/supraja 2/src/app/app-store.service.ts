import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AppStoreService {
  user: BehaviorSubject<any> = new BehaviorSubject(
    JSON.parse(localStorage.getItem("user"))
  );
  // projectId: BehaviorSubject<any> = new BehaviorSubject(
  //   JSON.parse(localStorage.getItem("projectId"))
  // );
  appLogo: BehaviorSubject<any> = new BehaviorSubject(false);
  // url = environment.baseUrl;
  loader: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isMobile: BehaviorSubject<boolean> = new BehaviorSubject(false);
  sideNavMode: BehaviorSubject<string> = new BehaviorSubject("side");
  sideNavOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  auth;
  constructor(private httpClient: HttpClient) {
    if (JSON.parse(localStorage.getItem("user"))) {
      this.auth = JSON.parse(localStorage.getItem("user")).token;
    }
  }

  setLoader(val) {
    this.loader.next(val);
  }
  setApplicationLogo(val) {
    this.appLogo.next(val);
  }

  setUserStateAfterlogin(user) {
    this.user.next(user);
  }

  setMobile(val) {
    this.isMobile.next(val);
  }

  setSideNavMode(val) {
    this.sideNavMode.next(val);
  }

  setSideNavOpen(val) {
    this.sideNavOpen.next(val);
  }
}

