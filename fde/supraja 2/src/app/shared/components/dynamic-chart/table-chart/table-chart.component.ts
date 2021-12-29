import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostListener,
  ElementRef,
  OnDestroy,
  AfterViewChecked,
  ChangeDetectorRef
} from "@angular/core";
import { ExcelService } from "../../../services/excel/excel.service";
import { FormControl } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: "ted-table-chart",
  templateUrl: "./table-chart.component.html",
  styleUrls: ["./table-chart.component.scss"]
})
export class TableChartComponent implements OnInit {
  constructor(
    private excelService: ExcelService,
    private cdRef: ChangeDetectorRef
  ) {}

  date;
  tableChart;
  isShowTableChart;

  isTooltip: boolean = false;
  isNormal: boolean = false;
  isArea: boolean = false;
  isStep: boolean = false;
  isLineDashed: boolean = false;
  @ViewChild("dynamicChartComp") dynamicChartComp: ElementRef;
  @ViewChild("downloadLink") downloadLink: ElementRef;
  @ViewChild("pngRef") pngRef;
  @Input() chartOptions;
  @Input() isShowCalendar;
  @Output() screenSize = new EventEmitter();
  @Output() dateRangeSelected = new EventEmitter();
  panelOpenState = false;
  viewScreen: boolean;
  data = [];
  propertyName;
  theme;
  fullScreen = false;
  isMobile = false;
  chartInstance: any;
  updateOptions: any;
  redraw = true;
  displayedColumns: any[];
  dataSource: any[];
  header: [];
  tableFull = false;
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth > 1366) {
      this.isTooltip = true;
    } else {
      this.isTooltip = false;
    }
    if (event.target.innerWidth <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  ngOnInit() {
    this.header = this.chartOptions.header;
    this.displayedColumns = this.chartOptions.accessColumns;
    this.dataSource = this.chartOptions.series[0].data;
    this.date = new FormControl(new Date());
    if (window.innerWidth > 1366) {
      this.isTooltip = true;
    }
    if (window.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.updateOptions = JSON.parse(JSON.stringify(this.chartOptions));
  }

  

  setChartInstance(e) {
    this.chartInstance = e;
  }

  exportExcel() {
    this.updateOptions.tableWithChart.isTableWithChart=this.isShowTableChart;
    this.excelService.exportAsDataSeries(
      this.updateOptions,
      this.dynamicChartComp.nativeElement
    );
  }

  exportPdf() {
    this.tableFull = true;
    let pdfOptions = {};
    let date = new Date();
    pdfOptions["orientation"] = "p";
    pdfOptions["title"] = this.chartOptions.mytitle.text;
    pdfOptions["description"] = this.chartOptions.mytitle.subtitle;
    pdfOptions["name"] = this.chartOptions.mytitle.text + " " + date.toString();
    setTimeout(() => {
      if (this.tableFull) {
        this.excelService.exportPdf(this.dynamicChartComp.nativeElement,pdfOptions);
        this.tableFull = false;
      }
    }, 500);
    
  }

  exportPng() {
    this.tableFull = true;
    let pngOptions = {};
    let date = new Date();
    pngOptions["name"] = this.chartOptions.mytitle.text + " " + date.toString;
    setTimeout(() => {
      if (this.tableFull) {
        this.excelService.exportImage(
          this.pngRef.nativeElement,
          this.downloadLink.nativeElement,
          pngOptions
        );
        this.tableFull = false;
      }
    }, 500);
  }

  screenOccupancy(value) {
    this.screenSize.emit([this.chartOptions.name, value]);
  }

  reset() {
    this.screenSize.emit([this.chartOptions.name, this.chartOptions.screenOccupancyDefault]);
    this.dataSource = this.chartOptions.series[0].data;
    this.isShowTableChart=false;
  }

}
