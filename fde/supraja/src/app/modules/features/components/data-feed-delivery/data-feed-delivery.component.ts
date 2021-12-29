import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AppStoreService } from "src/app/app-store.service";
import { FeaturesService } from '../../features.service';

@Component({
  selector: 'app-data-feed-delivery',
  templateUrl: './data-feed-delivery.component.html',
  styleUrls: ['./data-feed-delivery.component.scss']
})
export class DataFeedDeliveryComponent implements OnInit {
  hide = true;
  deliveryForm:FormGroup;
  feedType= [
    'File',
    'Table'
  ];
  ingConsInd=['I','C'];
  // sorAppDS = ['ARDW','RRDW'];
  deliveryType = ['SCP', 'SFTP', 'COPY', 'TBLLOAD', 'PBSB', 'KAFKA', 'MQ', 'API'];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private appStoreService: AppStoreService,
    private featuresService: FeaturesService
  ) { }
  user;

  ngOnInit() {
    this.deliveryForm = this.fb.group({
      data_Feed_Name: new FormControl("", [Validators.required]),
      data_Dlvry_Chnl_Typ_Cd: new FormControl('', [
        Validators.required
      ]),
      data_Dlvry_Chnl_Typ_Nm: new FormControl('',[Validators.required]),
      data_Dlvry_Owner_Ds: new FormControl('', [Validators.required])
    });
    this.appStoreService.user.subscribe(
      res => {
        if(res.role !== 'ADMIN'){
          this.deliveryForm.disable();
        }
      }
    )
  }
  submit(payload){
    console.log(payload);
    this.appStoreService.setLoader(true);
    this.featuresService.submitDelivery(payload).subscribe(
      res => {
        this.snackBar.open(res['logMessage'], "dismiss", {
          duration: 5000,
          verticalPosition: 'top', // 'top' | 'bottom'
          horizontalPosition: 'center',
          panelClass: ['sucess-snackbar']
        });
        this.appStoreService.setLoader(false);
      },
      err => {
        this.snackBar.open(err['logMessage'], "dismiss", {
          duration: 5000,
          verticalPosition: 'top', // 'top' | 'bottom'
          horizontalPosition: 'center',
          panelClass: ['error-snackbar']
        });
        this.appStoreService.setLoader(false);
        // this.router.navigateByUrl("AllEstimates");
      }
    );;
  }
}
