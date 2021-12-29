import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatIconModule, MatSnackBarModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';

// import { ConfirmDialogComponent } from './layout/confirm-dialog/confirm-dialog.component';
@NgModule({
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,

  ],
  exports: [HeaderComponent, FooterComponent, SpinnerComponent,
    // ConfirmDialogComponent
  ],
  declarations: [HeaderComponent, FooterComponent, SpinnerComponent,
    // ConfirmDialogComponent
  ],
  // entryComponents: [ConfirmDialogComponent],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: TedHttpInterceptor, multi: true }
  ]
})
export class CoreModule { }

