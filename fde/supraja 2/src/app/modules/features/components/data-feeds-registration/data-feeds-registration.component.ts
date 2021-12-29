import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AppStoreService } from "src/app/app-store.service";
import { FeaturesService } from '../../features.service';

@Component({
  selector: 'app-data-feeds-registration',
  templateUrl: './data-feeds-registration.component.html',
  styleUrls: ['./data-feeds-registration.component.css']
})
export class DataFeedsRegistrationComponent implements OnInit {
  hide = true;
  registrationForm;
  feedType= [
    'File',
    'Table'
  ];
  ingConsInd=['I','C'];
  // sorAppDS = ['ARDW','RRDW'];
  feedpriority = ['Low','Medium','High']
  statusInd = ['A','I']
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private appStoreService: AppStoreService,
    private featuresService: FeaturesService
  ) { }
  user;

  ngOnInit() {
    this.registrationForm = this.fb.group({
      dataFeedName: new FormControl("", [Validators.required]),
      dataFeedDesc: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      dataFeedType: new FormControl('',[Validators.required]),
      dataFeedPriority: new FormControl(''),
      dataFeedAvailabilityDS: new FormControl(''),
      dataFeedIngConsInd: new FormControl('',[Validators.required]),
      dataFeedSorAppDS: new FormControl('',[Validators.required]),
      dataFeedStatusInd: new FormControl('',[Validators.required]),
    });

    this.appStoreService.user.subscribe(
      res => {
        if(res.role !== 'ADMIN'){
          this.registrationForm.disable();
        }
      }
    )
  }
  submit(payload){
    this.appStoreService.setLoader(true);
    this.featuresService.submitReg(payload).subscribe(
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
