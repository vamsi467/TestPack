import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userFormGroup: FormGroup;
  constructor(private route:Router) {}
  ngOnInit() {
    this.userFormGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
     
    });

  }

  navigateToHome() {
    this.route.navigateByUrl("/users")
  }

}
