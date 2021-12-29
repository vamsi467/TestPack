import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { AppStoreService } from 'src/app/app-store.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']

})
export class SpinnerComponent implements OnInit {
  color = "primary";
  mode = "indeterminate";
  value = 50;
  loader;
  constructor(
    private appStoreService: AppStoreService, ) { }

  ngOnInit() {
    this.appStoreService.loader.subscribe(
      res => {
      this.loader = res;
        console.log(res);
      }
    );
  }
}


