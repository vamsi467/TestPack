import { Component, ViewChild, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AppStoreService } from "src/app/app-store.service";
import { FeaturesService } from "../../features.service";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-data-feed-delivery",
  templateUrl: "./data-feed-delivery.component.html",
  styleUrls: ["./data-feed-delivery.component.scss"]
})
export class DataFeedDeliveryComponent implements OnInit {
  hide = true;
  deliveryForm: FormGroup;
  feedType = ["File", "Table"];
  radioOptions = ["ARDW", "RRDW"];
  ingConsInd = ["I", "C"];
  // sorAppDS = ['ARDW','RRDW'];
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
  processes = [
    { id: 1, name: "Process_1" },
    { id: 2, name: "Process_2" },
    { id: 3, name: "Process_3" },
    { id: 4, name: "Process_4" },
    { id: 5, name: "Process_5" },
    { id: 6, name: "Process_6" },
    { id: 7, name: "Process_7" },
    { id: 8, name: "Process_8" }
  ];
  dataFeeds = [
    "data feed 1",
    "data feed 2",
    "data feed 3",
    "data feed 4",
    "data feed 5",
    "data feed 6",
    "data feed 7",
    "data feed 8",
    "data feed 9",
    "data feed 10",
    "data feed 11"
  ];
  dropdownList;
  dropdownSettings: IDropdownSettings;
  selectedProcesses = [];
  selectedDataFeeds = [];
  displayedColumns: string[] = [
    "id",
    "application",
    "datafeed",
    "date",
    "starttime",
    "endtime"
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private appStoreService: AppStoreService,
    private featuresService: FeaturesService
  ) {}
  user;

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: "id",
      textField: "name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.deliveryForm = this.fb.group({
      data_Feed_Name: new FormControl("", [Validators.required]),
      process: new FormControl("", [Validators.required]),
      dataFeed: new FormControl("", [Validators.required])
    });

    // this.appStoreService.user.subscribe(res => {
    //   if (res.role !== "ADMIN") {
    //     this.deliveryForm.disable();
    //   }
    // });
    this.dataSource = new MatTableDataSource([
      {
        id: 1,
        application: "application1",
        datafeed: "datafeed1",
        date: "12/11/20",
        starttime: "12/11/20",
        endtime: "12/11/20"
      },
      {
        id: 2,
        application: "application2",
        datafeed: "datafeed1",
        date: "12/11/20",
        starttime: "12/11/20",
        endtime: "12/11/20"
      },
      {
        id: 3,
        application: "application3",
        datafeed: "datafeed1",
        date: "12/11/20",
        starttime: "12/11/20",
        endtime: "12/11/20"
      },
      {
        id: 4,
        application: "application4",
        datafeed: "datafeed1",
        date: "12/11/20",
        starttime: "12/11/20",
        endtime: "12/11/20"
      }
    ]);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSelectProcess(event) {
    this.deliveryForm.controls["process"].setValue(this.selectedProcesses);
  }
  onSelectAllProcesses(event) {
    this.deliveryForm.controls["process"].setValue(this.processes);
  }
  onDeSelectProcess(event) {
    this.deliveryForm.controls["process"].setValue(this.selectedProcesses);
  }
  onSelectFeed(event) {
    this.deliveryForm.controls["dataFeed"].setValue(this.selectedDataFeeds);
  }
  onDeSelectFeed(event) {
    this.deliveryForm.controls["dataFeed"].setValue(this.selectedDataFeeds);
  }

  onSelectAllFeed(event) {
    this.deliveryForm.controls["dataFeed"].setValue(this.dataFeeds);
  }
  submit(payload) {
    this.appStoreService.setLoader(true);
    this.featuresService.submitDelivery(payload).subscribe(
      res => {
        this.snackBar.open(res["logMessage"], "dismiss", {
          duration: 5000,
          verticalPosition: "top", // 'top' | 'bottom'
          horizontalPosition: "center",
          panelClass: ["sucess-snackbar"]
        });
        this.appStoreService.setLoader(false);
      },
      err => {
        this.snackBar.open(err["logMessage"], "dismiss", {
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
