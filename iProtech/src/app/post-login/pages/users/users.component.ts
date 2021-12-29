import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserServService } from "../../user-serv.service";
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  userList = [];
  userFormGroup: FormGroup;
  constructor(private userSer: UserServService) {}

  ngOnInit() {
    this.userFormGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobileNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^((\\+91-?|0)?[0-9]{10}$)"),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    // service
    this.userSer.getdata().subscribe((res: any) => {
      
      this.userList = res;
      console.log(this.userList);
    });
  }

  delete(index) {
    console.log(index)
    this.userList.splice(index,1);
  }
}
