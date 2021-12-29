import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { ExcelService } from "src/app/shared/services/excel/excel.service";

@Component({
  selector: "ted-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.scss"]
})
export class DoughnutChartComponent implements OnInit {
  constructor(private excelService: ExcelService) {}

  @Input() chartOptions: any;
  @ViewChild("doughnutElement") doughnutElement: ElementRef;
  @ViewChild("downloadLink") downloadLink: ElementRef;
  @ViewChild("pngRef") pngRef;
  @Output() screenSize = new EventEmitter();
  sqlMetricItems: any;
  metricChartArray = [];
  chartItems = [
    "connectionsenabledthroughai",
    "imsexchangedsincelaunch",
    "totaldigestemails"
  ];
  metricNamesArray = [
    "Connections Enabled Through AI",
    "Exchanged IM's Since Launch",
    "Email Digests Delivered"
  ];
  fullScreen = false;

  ngOnInit() {
    this.chartItems = this.chartOptions.chartItems;
    this.metricNamesArray = this.chartOptions.chartItemNames;
    this.sqlMetricItems = Object.keys(this.chartOptions.series[0].data[0]);
    this.metricChartArray = this.chartItems.map((element, index) => {
      let updateOption = JSON.parse(JSON.stringify(this.chartOptions));
      updateOption.series[0].name = this.metricNamesArray[index]
        ? this.metricNamesArray[index]
        : element;
      updateOption.legend.data = [
        this.metricNamesArray[index] ? this.metricNamesArray[index] : element
      ];
      updateOption.color = () => {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

      updateOption.series[0].data[0] = JSON.parse(
        JSON.stringify({
          name: this.chartOptions.series[0].data[0][element],
          value: this.chartOptions.series[0].data[0][element]
        })
      );
      return updateOption;
    });
  }
  exportExcel() {
    this.excelService.exportAsExcelDoughnut(
      this.chartOptions,
      this.doughnutElement.nativeElement
    );
  }
  exportPdf() {
    let pdfOptions = {};
    let date = new Date();
    pdfOptions["orientation"] = "p";
    pdfOptions["title"] = this.chartOptions.mytitle.text;
    pdfOptions["description"] = this.chartOptions.mytitle.subtitle;
    pdfOptions["name"] = this.chartOptions.mytitle.text + " " + date.toString();
    // if (this.updateOptions.isShowChart) {
    //   pdfOptions["height"] = this.chartInstance.getHeight();
    //   pdfOptions["width"] = this.chartInstance.getWidth();
    // }

    // if (this.chartOptions.isShowCalender) {
    //   pdfOptions["dateRange"] = this.selected;
    // }
    this.excelService.exportPdf(this.doughnutElement.nativeElement, pdfOptions);
  }
  exportPng() {
    let pngOptions = {};
    let date = new Date();
    pngOptions["name"] = this.chartOptions.mytitle.text + " " + date.toString;
    this.excelService.exportImage(
      this.pngRef.nativeElement,
      this.downloadLink.nativeElement,
      pngOptions
    );
  }
  screenOccupancy(size) {
    this.screenSize.emit([this.chartOptions.name, size]);
  }
  reset() {
    this.screenSize.emit([
      this.chartOptions.name,
      this.chartOptions.screenOccupancyDefault
    ]);
  }
}
