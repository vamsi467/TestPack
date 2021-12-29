import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { FormsComponent } from "./forms/forms.component";
import { LoginComponent } from "./login/login.component";
// import { UsersDataComponent } from "./usersData/users-data/users-data.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "",
    loadChildren: "./post-login/post-login.module#PostLoginModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
