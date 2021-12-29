import { Component, OnInit } from '@angular/core';
import { AppStoreService } from '../app-store.service';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.scss']
})
export class PostLoginComponent implements OnInit {

  sideNavMode: any;
  sideNavOpen: any;
  currentUser: any;
  changeText: any;
  sidenavWidth: number;
  isMobile: boolean;

  constructor(private appStoreService: AppStoreService) {}

  ngOnInit() {
    this.changeText = true;
    this.appStoreService.sideNavMode.subscribe(res => {
      this.sideNavMode = res;
    });
    this.appStoreService.sideNavOpen.subscribe(res => {
      this.sideNavOpen = res;
    });
    this.appStoreService.user.subscribe(res => {
      this.currentUser = res;
    });
    this.appStoreService.isMobile.subscribe(res => {
      this.isMobile = res;
    });
  }
  increase() {
    if (!this.isMobile) {
      this.sidenavWidth = 15;
      this.changeText = true;
    }
  }
  decrease() {
    if (!this.isMobile) {
      this.sidenavWidth = 4;
      this.changeText = false;
    }
  }
}
