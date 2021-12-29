import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { AppStoreService } from './app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  sideNavMode = "side";
  sideNavOpen = false;
  sideNavPreviousState = true;
  sideNavText = false;
  isMobile: boolean;
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth <= 769) {
      this.appStoreService.setMobile(true);
      this.appStoreService.setSideNavMode('over');
      this.appStoreService.setSideNavOpen(false);
    }
    else {
      this.appStoreService.setMobile(false);
      this.appStoreService.setSideNavMode('side');
      this.appStoreService.setSideNavOpen(true);
    }
  }

  constructor(
    private appStoreService: AppStoreService,
  ) {
    // this.oktaAuth.handleAuthentication();
  }

  ngOnInit() {
    if (window.innerWidth < 769) {
      this.appStoreService.setMobile(true);
      this.appStoreService.setSideNavMode('over');
      this.appStoreService.setSideNavOpen(false);
    }
    else {
      this.appStoreService.setMobile(false);
      this.appStoreService.setSideNavMode('side');
      this.appStoreService.setSideNavOpen(true);
    }
  }

}
