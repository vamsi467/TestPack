import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  Output,
  EventEmitter
} from "@angular/core";
import { AppStoreService } from "src/app/app-store.service";
import { Router } from "@angular/router";
import { MatDialogConfig, MatDialog, MatSnackBar } from "@angular/material";

// import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-header-component",
  templateUrl: "header.component.html"
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: any;
  sideNavOpen;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private appStoreService: AppStoreService
  ) {}

  ngOnInit() {
    this.appStoreService.sideNavOpen.subscribe(res => {
      this.sideNavOpen = res;
    });
    this.appStoreService.user.subscribe(res => {
      console.log(this.currentUser)
      this.currentUser = res;
    });
  }

  

  /* Close fullscreen */
  exitFullscreen() {
  }
  ngOnDestroy() {
    // this.currentUser = null;
  }
  sideNavEmit() {
    this.appStoreService.setSideNavOpen(!this.sideNavOpen);
  }
  logout() {
    this.router.navigate(["/login"]);
  }
  navigation() {
    this.router.navigate(["/projects"]);
  }
  // openDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.data = {
  //     actions: ["Cancel", "Logout", "Are you sure you want to logout"]
  //   };
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
  //   dialogRef.afterClosed().subscribe(res => {
  //     if (res) {
  //       this.logout();
  //     } else {
  //     }
  //   });
  // }
}

