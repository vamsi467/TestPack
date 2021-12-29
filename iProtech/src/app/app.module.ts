import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsComponent } from './forms/forms.component';
// import { UsersDataComponent } from './usersData/users-data/users-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'

import {
  MatSidenavModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule,
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

import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // FormsComponent,
    // UsersDataComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
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
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
