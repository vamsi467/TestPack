import { Component, OnInit } from "@angular/core";
import { AppStoreService } from "src/app/app-store.service";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"],
})
export class PageHeaderComponent implements OnInit {currentUser: any;
  applicationLogo: any;
  elem;
  fullScreen = false;
  sideNavOpen;
  isHamburgerMenu: boolean;
  constructor(
    private appStoreService: AppStoreService,
  ) {}

  ngOnInit() {
    this.appStoreService.sideNavOpen.subscribe(res => {
      this.sideNavOpen = res;
    });
    this.appStoreService.user.subscribe(res => {
      this.currentUser = res;
    });
    this.appStoreService.isHamburgerMenu.subscribe(res => {
      this.isHamburgerMenu = res;
    });
  }

  fullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
    this.fullScreen = true;
  }

  /* Close fullscreen */
  
  ngOnDestroy() {
    // this.currentUser = null;
  }
  sideNavEmit() {
    this.appStoreService.setSideNavOpen(!this.sideNavOpen);
  }
  
  navigation() {
    // this.router.navigate(["/projects"]);
  }
  
}

