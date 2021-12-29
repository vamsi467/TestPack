import { Component, HostListener } from '@angular/core';
import { AppStoreService } from './app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth <= 768) {
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
    private appStoreService: AppStoreService
  ) {
    // this.oktaAuth.handleAuthentication();
  }

  ngOnInit() {
    if (window.innerWidth < 768) {
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

  
