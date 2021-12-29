import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostListener,
  ElementRef
} from "@angular/core";
import * as moment from "moment";
@Component({
  selector: "ted-dynamic-chart",
  templateUrl: "./dynamic-chart.component.html",
  styleUrls: ["./dynamic-chart.component.scss"]
})
export class DynamicChartComponent implements OnInit {
  
  
 
  @Input() chartOptions;
  @Input() index;
  @Output() occupancy = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log(JSON.stringify(this.chartOptions));
  }
  screenOccupancy(event){
    this.occupancy.emit(event);
  }
}
