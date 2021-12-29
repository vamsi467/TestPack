import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AppStoreService } from "src/app/app-store.service";
import { AuthService } from '../../auth.service';

@Component({
  selector: "dj-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true;
  userForm;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private appStoreService: AppStoreService,
    private authService: AuthService
  ) { }
  user;

  ngOnInit() {
    localStorage.clear();
    this.userForm = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }
  signin(payload) {
    this.appStoreService.setLoader(true);
    this.authService.login(payload).subscribe(
      res => {
        this.snackBar.open(res['logMessage'], "dismiss", {
          duration: 5000,
          verticalPosition: 'top', // 'top' | 'bottom'
          horizontalPosition: 'center',
          panelClass: ['sucess-snackbar']
        });
        this.user = res;
        localStorage.setItem("user", JSON.stringify(res));
        this.appStoreService.setUserStateAfterlogin(res);
        this.appStoreService.setLoader(false);
        this.router.navigateByUrl("registration");
      },
      err => {
        this.snackBar.open(err['logMessage'], "dismiss", {
          duration: 5000,
          verticalPosition: 'top', // 'top' | 'bottom'
          horizontalPosition: 'center',
          panelClass: ['error-snackbar']
        });
        this.appStoreService.setLoader(false);
        // this.router.navigateByUrl("AllEstimates");
      }
    );

  }
}

