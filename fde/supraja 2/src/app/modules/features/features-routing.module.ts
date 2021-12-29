import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { DataFeedsRegistrationComponent } from './components/data-feeds-registration/data-feeds-registration.component';
import { DataFeedDeliveryComponent } from './components/data-feed-delivery/data-feed-delivery.component';
import { DataFeedsResourceRegistryComponent } from './components/data-feeds-resource-registry/data-feeds-resource-registry.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'registration',
        component: DataFeedsRegistrationComponent
      },
      {
        path: 'delivery',
        component: DataFeedDeliveryComponent
      },
      {
        path: "resourceRegistry",
        component: DataFeedsResourceRegistryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
