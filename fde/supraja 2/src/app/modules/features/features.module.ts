import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { DataFeedsRegistrationComponent } from './components/data-feeds-registration/data-feeds-registration.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatDividerModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatTableModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFeedDeliveryComponent } from './components/data-feed-delivery/data-feed-delivery.component';
import { DataFeedsResourceRegistryComponent } from './components/data-feeds-resource-registry/data-feeds-resource-registry.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [FeaturesComponent, DataFeedsRegistrationComponent, DataFeedDeliveryComponent, DataFeedsResourceRegistryComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    CoreModule,
    SharedModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatTableModule
  ]
})
export class FeaturesModule { }
