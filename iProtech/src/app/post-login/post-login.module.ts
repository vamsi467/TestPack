import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostLoginRoutingModule } from './post-login-routing.module';
import { PostLoginComponent } from './post-login.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { MatIconModule } from '@angular/material/icon'

import {
  MatSidenavModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule,
  // MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatCardModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatChipsModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import {NgbCarouselModule, } from '@ng-bootstrap/ng-bootstrap';


import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { UserServService } from './user-serv.service';
import { CarouselComponent } from './pages/carousel/carousel.component';

@NgModule({
  declarations: [PostLoginComponent, UsersComponent, UserDetailsComponent, UserListComponent, CarouselComponent],
  imports: [
  CommonModule,
  PostLoginRoutingModule,
  MatSidenavModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatCardModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatChipsModule,
  ReactiveFormsModule,
  FormsModule,
  SharedModule,
  MatIconModule,
  NgbCarouselModule
  ],
  providers:[UserServService]
})
export class PostLoginModule { }
