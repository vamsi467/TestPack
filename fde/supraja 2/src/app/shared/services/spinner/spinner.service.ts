import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable()
export class SpinnerService {
  isLoading = new Subject<boolean>();
  constructor() {}
  showLoadingSpinner() {
    this.isLoading.next(true);
  }
  hideLoadingSpinner() {
    this.isLoading.next(false);
  }
}
