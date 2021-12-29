import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarouselComponent } from "./pages/carousel/carousel.component";
import { UserDetailsComponent } from "./pages/user-details/user-details.component";
import { UsersComponent } from "./pages/users/users.component";
import { PostLoginComponent } from "./post-login.component";

const routes: Routes = [
  {
    path: "",
    component: PostLoginComponent,
    children: [
      { path: "users", component: UsersComponent },
      { path: "userdetails/:id", component: UserDetailsComponent },
      { path: "carousel", component: CarouselComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostLoginRoutingModule {}
