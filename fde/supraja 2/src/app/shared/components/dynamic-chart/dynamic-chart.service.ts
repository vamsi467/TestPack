import { Injectable } from "@angular/core";
import { DynamicChart } from "./dynamic-chart";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
@Injectable({
  providedIn: "root"
})
export class DynamicChartService {
  constructor(_http: HttpClient) {
  
  }
}
