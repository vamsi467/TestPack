import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: "./modules/auth/auth.module#AuthModule"
  },
  {
    path: "",
    loadChildren: "./modules/features/features.module#FeaturesModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {
        useHash: true
      }

    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }