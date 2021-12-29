import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AppStoreService } from "src/app/app-store.service";
import { FeaturesService } from "../../features.service";

@Component({
  selector: "app-data-feeds-resource-registry",
  templateUrl: "./data-feeds-resource-registry.component.html",
  styleUrls: ["./data-feeds-resource-registry.component.scss"]
})
export class DataFeedsResourceRegistryComponent implements OnInit {
  hide = true;
  resourceForm;
  feedType = ["File", "Table"];
  selectedRadio = "File or Table";
  radioOptions = ["File or Table", "Kafka", "MQ", "API"];
  deliveryType = [
    "SCP",
    "SFTP",
    "COPY",
    "TBLLOAD",
    "PBSB",
    "KAFKA",
    "MQ",
    "API"
  ];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private appStoreService: AppStoreService,
    private featuresService: FeaturesService
  ) { }
  user;

  ngOnInit() {
    this.resourceForm = this.fb.group({
      data_Feed_Name: new FormControl("", [Validators.required]),
      df_Res_Base_Name: new FormControl("", [Validators.required]),
      df_Res_Type: new FormControl("", [Validators.required]),
      // data_Dlvry_Owner_Ds: new FormControl("", [Validators.required]),
      app_Region_Id: new FormControl("", [Validators.required]),
      app_Region_Cd: new FormControl("", [Validators.required]),
      header_Rec_Id: new FormControl("", [Validators.required]),
      trailer_Rec_Id: new FormControl("", [Validators.required]),
      detail_Rec_Id: new FormControl("", [Validators.required]),
      res_Type_Category: new FormControl("", [Validators.required]),
      // data_Dlvry_Chnl_Typ_Nm: new FormControl(""),
      delta_Extract_Fields: new FormControl("", [Validators.required]),
      res_Db_Schema: new FormControl("", [Validators.required]),
      res_Db_Details: new FormControl("", [Validators.required]),
      res_Server_Details: new FormControl("", [Validators.required]),
      res_Load_Type: new FormControl("", [Validators.required]),
      res_Data_Avail_Freq: new FormControl("", [Validators.required]),
      // data_Dlvry_Chnl_Typ_Cd: new FormControl("", [Validators.required]),
      res_Load_Frequency: new FormControl("", [Validators.required]),
      field_Delimeter: new FormControl("", [Validators.required]),
      record_Delimeter: new FormControl("", [Validators.required]),
      data_Retention_Period: new FormControl("", [Validators.required]),
      code_Page: new FormControl("", [Validators.required]),
      begin_Ts: new FormControl("", [Validators.required]),
      // Kafka
      topic_Name: new FormControl(""),
      no_Of_Partitions: new FormControl(""),
      producer_App_Dtls: new FormControl(""),
      no_Of_Consumers: new FormControl(""),
      consumer_Group_Nm: new FormControl(""),
      kafka_Begin_Ts: new FormControl(""),
      // MQ
      mq_Name: new FormControl(""),
      mq_Descr: new FormControl(""),
      queue_Manager_Chnl_Name: new FormControl(""),
      queue_Manager_Name: new FormControl(""),
      mq_Begin_Ts: new FormControl(""),

      // API
      api_Begin_Ts: new FormControl(""),
      api_Header_Params: new FormControl(""),
      api_Name: new FormControl(""),
      api_Path_Params: new FormControl(""),
      api_Query_Params: new FormControl(""),
      api_Req_Body_Params: new FormControl(""),
      api_URL: new FormControl("")
    });
    
    this.appStoreService.user.subscribe(
      res => {
        if(res.role !== 'ADMIN'){
          this.resourceForm.disable();
        }
      }
    )
  }
  setDefaultKafka() {
    this.resourceForm.controls['topic_Name'].setValue('');
    this.resourceForm.controls['no_Of_Partitions'].setValue('');
    this.resourceForm.controls['producer_App_Dtls'].setValue('');
    this.resourceForm.controls['no_Of_Consumers'].setValue('');
    this.resourceForm.controls['consumer_Group_Nm'].setValue('');
    this.resourceForm.controls['kafka_Begin_Ts'].setValue('');
  }

  setDefaultMQ() {
    this.resourceForm.controls['mq_Name'].setValue('');
    this.resourceForm.controls['mq_Descr'].setValue('');
    this.resourceForm.controls['queue_Manager_Chnl_Name'].setValue('');
    this.resourceForm.controls['queue_Manager_Name'].setValue('');
    this.resourceForm.controls['mq_Begin_Ts'].setValue('');

  }

  setDefaultAPI() {
    this.resourceForm.controls['api_Begin_Ts'].setValue('');
    this.resourceForm.controls['api_Header_Params'].setValue('');
    this.resourceForm.controls['api_Name'].setValue('');
    this.resourceForm.controls['api_Path_Params'].setValue('');
    this.resourceForm.controls['api_Query_Params'].setValue('');
    this.resourceForm.controls['api_Req_Body_Params'].setValue('');
    this.resourceForm.controls['api_URL'].setValue('');
  }
  submit(payload) {

    if (this.selectedRadio === "File or Table") {
      this.setDefaultKafka();
      this.setDefaultMQ();
      this.setDefaultAPI();
    } else if (this.selectedRadio === "Kafka") {
      this.setDefaultMQ();
      this.setDefaultAPI();
    } else if (this.selectedRadio === "MQ") {
      this.setDefaultKafka();
      this.setDefaultAPI();
    } else if (this.selectedRadio === "API") {
      this.setDefaultKafka();
      this.setDefaultMQ();
    }

    console.log(payload);
    this.appStoreService.setLoader(true);
    this.featuresService.submitResource(payload).subscribe(
      res => {
        this.snackBar.open(res['logMessage'], "dismiss", {
          duration: 5000,
          verticalPosition: "top", // 'top' | 'bottom'
          horizontalPosition: "center",
          panelClass: ["success-snackbar"]
        });
        this.appStoreService.setLoader(false);
      },
      err => {
        this.snackBar.open(err.logMessage, "dismiss", {
          duration: 5000,
          verticalPosition: "top", // 'top' | 'bottom'
          horizontalPosition: "center",
          panelClass: ["error-snackbar"]
        });
        this.appStoreService.setLoader(false);
        // this.router.navigateByUrl("AllEstimates");
      }
    );
  }
}
