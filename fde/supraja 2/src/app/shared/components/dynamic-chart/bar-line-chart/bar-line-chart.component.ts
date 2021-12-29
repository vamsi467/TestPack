import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostListener,
  ElementRef,
  ChangeDetectorRef
} from "@angular/core";
import { ExcelService } from "../../../services/excel/excel.service";
import * as moment from "moment";

@Component({
  selector: "ted-bar-line-chart",
  templateUrl: "./bar-line-chart.component.html",
  styleUrls: ["./bar-line-chart.component.scss"]
})
export class BarLineChartComponent implements OnInit {
  date;
  isTooltip: boolean = false;
  isNormal: boolean = false;
  isArea: boolean = false;
  isStep: boolean = false;
  isLineDashed: boolean = false;
  @ViewChild("dynamicChartComp") dynamicChartComp: ElementRef;
  @ViewChild("downloadLink") downloadLink: ElementRef;
  @ViewChild("pngRef") pngRef;
  @Input() chartOptions;
  @Input() index;
  panelOpenState = false;
  viewScreen: boolean;
  data = [];
  propertyName;
  theme;
  fullScreen = false;
  isMobile = false;
  chartInstance: any;
  updateOptions: any;
  chartTypeSwitch = {
    bar: "line",
    line: "bar"
  };
  redraw = true;
  @Output() occupancy = new EventEmitter();
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

  constructor(
    private excelService: ExcelService
  ) { }

  ngOnInit() {
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
    this.excelService.exportAsExcelFile(
      this.updateOptions,
      this.dynamicChartComp.nativeElement
    );
  }

  exportPdf() {
    let pdfOptions = {};
    let date = new Date();
    pdfOptions["orientation"] = "p";
    pdfOptions["title"] = this.chartOptions.mytitle.text;
    pdfOptions["description"] = this.chartOptions.mytitle.subtitle;
    pdfOptions["name"] = this.chartOptions.mytitle.text + " " + date.toString();
    pdfOptions["height"] = this.chartInstance.getHeight();
    pdfOptions["width"] = this.chartInstance.getWidth();
    this.excelService.exportPdf(
      this.dynamicChartComp.nativeElement,
      pdfOptions
    );
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

  screenOccupancyHorizontal(value) {
    this.updateOptions.screenOccupancy.horizontal = value;
    this.occupancy.emit({ index: this.index, screenOccupancy: this.updateOptions.screenOccupancy });
  }
  screenOccupancyVertical(value) {
    this.updateOptions.screenOccupancy.vertical = value;
    this.occupancy.emit({ index: this.index, screenOccupancy: this.updateOptions.screenOccupancy });
  }

  changeType(type) {
    this.updateOptions.series.forEach(e => {
      e.type = type;
      return e;
    });

    this.chartInstance.setOption(this.updateOptions, true);
  }

  multiChartChange(e, i) {
    this.updateOptions.series[i].type = e.value;
    this.chartInstance.setOption(this.updateOptions, true);
  }
  stack(event) {
    if (event.checked) {
      this.updateOptions.series.forEach(e => {
        return (e.stack = "one");
      });
    } else if (!event.checked) {
      this.updateOptions.series.forEach(e => {
        return (e.stack = null);
      });
    }
    this.chartInstance.setOption(this.updateOptions, true);
  }

  lineArea(event, i?) {
    this.isArea = event.checked;
    this.isNormal = false;
    this.changeType("line");
    if (event.checked) {
      if (i) {
        this.updateOptions.series[i].areaStyle = {};
      } else {
        this.updateOptions.series.forEach(e => {
          return (e.areaStyle = {});
        });
      }
    } else {
      if (i) {
        delete this.updateOptions.series[i].areaStyle;
      } else {
        this.updateOptions.series.forEach(e => {
          delete e.areaStyle;
          return e;
        });
      }
    }
    this.chartInstance.setOption(this.updateOptions, true);
    this.updateOptions.series.forEach(e => {
      if (e.step) {
        delete e.step;
        e.step = true;
        return e;
      }
    });
    this.chartInstance.clear();
    this.chartInstance.setOption(this.updateOptions, true);
  }

  lineStep(event, i?) {
    this.isStep = event.checked;
    this.isNormal = false;
    this.changeType("line");
    this.redraw = false;
    if (event.checked) {
      if (i) {
        this.updateOptions.series[i].step = true;
      } else {
        this.updateOptions.series.forEach(e => {
          return (e.step = true);
        });
      }
    } else {
      if (i) {
        this.updateOptions.series[i].step = false;
      } else {
        this.updateOptions.series.forEach(e => {
          e.step = false;
          return e;
        });
      }
    }
    this.redraw = true;
    this.chartInstance.setOption(this.updateOptions, true);
  }

  lineDashed(event, i?) {
    this.isNormal = false;
    this.isLineDashed = event.checked;
    this.changeType("line");
    if (event.checked) {
      if (i) {
        this.updateOptions.series[i].lineStyle = {
          normal: {
            type: "dashed"
          }
        };
      } else {
        this.updateOptions.series.forEach(e => {
          return (e.lineStyle = {
            normal: {
              type: "dashed"
            }
          });
        });
      }
    } else {
      if (i) {
        delete this.updateOptions.series[i].lineStyle;
      } else {
        this.updateOptions.series.forEach(e => {
          delete e.lineStyle;
          return e;
        });
      }
    }
    this.chartInstance.setOption(this.updateOptions, true);
  }

  updateLineType(event, i) {
    this.isNormal = event.checked;
    this.isLineDashed = false;
    this.isStep = false;
    this.isArea = false;
    if (i) {
      delete this.updateOptions.series[i].lineStyle;
      delete this.updateOptions.series[i].step;
      delete this.updateOptions.series[i].areaStyle;
      this.updateOptions.series[i].type = "line";
    } else {
      this.updateOptions.series.forEach(e => {
        if (e.step) {
          e.step = false;
        }
        delete e.lineStyle;
        delete e.step;
        delete e.areaStyle;
        e.type = "line";
        return e;
      });
    }
    this.chartInstance.setOption(this.updateOptions, true);
  }

  lineOptions(event, i?) {
    this.isNormal = event.checked;
    this.isLineDashed = false;
    this.isStep = false;
    this.isArea = false;
    if (i) {
      delete this.updateOptions.series[i].lineStyle;
      delete this.updateOptions.series[i].step;
      delete this.updateOptions.series[i].areaStyle;
      this.updateOptions.series[i].type = "line";
    } else {
      this.updateOptions.series.forEach(e => {
        if (e.step) {
          e.step = false;
        }
        delete e.lineStyle;
        delete e.step;
        delete e.areaStyle;
        e.type = "line";
        return e;
      });
    }
    this.chartInstance.setOption(this.updateOptions, true);
    this.updateLineType(event, i);
  }

  reset() {
    this.occupancy.emit({ index: this.index, screenOccupancy: this.chartOptions.screenOccupancy });
    this.isArea = false;
    this.isNormal = false;
    this.isStep = false;
    this.isLineDashed = false;
    this.theme = "";
    this.changeType(this.chartOptions.series[0].defaultType);
    this.chartInstance.setOption(this.chartOptions, true);
  }

  lineCheckNormal(i) {
    if (i) {
    } else {
    }
  }

}
