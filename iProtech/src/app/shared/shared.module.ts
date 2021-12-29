import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SideNavComponent } from "../shared/components/side-nav/side-nav.component";
import { PageHeaderComponent } from "../shared/components/page-header/page-header.component";
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
  MatChipsModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SideNavComponent, PageHeaderComponent],
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
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
    MatChipsModule,
  ],
  exports: [SideNavComponent, PageHeaderComponent],
})
export class SharedModule {}
