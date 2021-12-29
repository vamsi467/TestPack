import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { SpinnerService } from "../../services/spinner/spinner.service";

@Component({
  selector: "ted-spinner",
  templateUrl: "spinner.component.html",
  styleUrls: ["spinner.component.scss"]
})
export class SpinnerComponent implements OnInit {
  color = "primary";
  mode = "indeterminate";
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: SpinnerService) {}

  ngOnInit() {}
}
