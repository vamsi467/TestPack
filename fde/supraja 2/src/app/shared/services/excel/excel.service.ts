import { Injectable } from "@angular/core";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as Excel from "exceljs/dist/exceljs.min.js";
import * as ExcelProper from "exceljs";
import * as fs from "file-saver";
import * as moment from "moment";
@Injectable()
export class ExcelService {
  constructor() {}

  exportPdf(chartItem, options) {
    html2canvas(chartItem, options).then(canvas => {
      const canvasHeight = canvas.width;
      const canvasWidth = canvas.height;
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF(options.orientation, "mm");
      const pdfWidth = doc.internal.pageSize.getWidth() - 20;
      const pdfHeight = pdfWidth * (canvasWidth / canvasHeight);
      doc.setFontStyle("bold");
      doc.text(20, 10, options.title);
      doc.setFontStyle("normal");
      doc.text(20, 20, options.description);
      doc.addImage(imgData, "PNG", 5, 32, pdfWidth, pdfHeight, "", "FAST", "0");
      doc.save(options.name);
    });
  }

  exportImage(chartItem, downloadLink, options) {
    html2canvas(chartItem).then(canvas => {
      chartItem.src = canvas.toDataURL();
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.download = options.name;
      downloadLink.click();
    });
  }
  exportAsExcelDoughnut(options, chartElement) {
    let exportObject = {};
    let workbook: ExcelProper.Workbook = new Excel.Workbook();
    workbook.created = new Date();
    let dataSheet = workbook.addWorksheet(options.mytitle.text);

    let titleRow = dataSheet.addRow([options.mytitle.text]);
    titleRow.font = {
      name: "Times New Roman",
      size: 16,
      underline: "double",
      bold: true
    };
    dataSheet.mergeCells("A1:D1");
    let metricValues = [];
    let metricKeys = Object.keys(options.series[0].data[0]);
    metricKeys.forEach(element => {
      metricValues.push(options.series[0].data[0][element]);
    });
    let subtitleRow = dataSheet.addRow([options.mytitle.subtitle]);
    subtitleRow.font = { name: "Times New Roman", size: 14 };
    dataSheet.mergeCells("A2:E2");
    dataSheet.addRow([]);
    dataSheet.addRow(Object.keys(options.series[0].data[0]));
    dataSheet.addRow(metricValues);

    html2canvas(chartElement).then(canvas => {
      let image;
      chartElement.src = canvas.toDataURL();
      image = workbook.addImage({
        base64: canvas.toDataURL(),
        extension: "png"
      });
      let chartSheet = workbook.addWorksheet("chart");
      chartSheet.addImage(image, {
        tl: { col: 3, row: 3 },
        ext: { width: 500, height: 350 }
      });
      workbook.xlsx.writeBuffer().then(data => {
        let blob = new Blob([data], {
          type: "application/octet-stream"
        });
        fs.saveAs(blob, `${options.mytitle.text}.xlsx`);
      });
    });
    // workbook.xlsx.writeBuffer().then(data => {
    //   let blob = new Blob([data], {
    //     type: "application/octet-stream"
    //   });
    //   fs.saveAs(blob, `${options.mytitle.text}.xlsx`);
    // });
  }
  exportAsDataSeries(options,element){
    console.log(JSON.stringify(options));
    let exportObject = {};
    let workbook: ExcelProper.Workbook = new Excel.Workbook();
    // workbook.creator = 'Me';
    workbook.created = new Date();

    let dataSheet = workbook.addWorksheet(options.mytitle.text);

    let titleRow = dataSheet.addRow([options.mytitle.text]);
    titleRow.font = {
      name: "Times New Roman",
      size: 16,
      underline: "double",
      bold: true
    };
    dataSheet.mergeCells("A1:D1");
    let subtitleRow = dataSheet.addRow([options.mytitle.subtitle]);
    subtitleRow.font = { name: "Times New Roman", size: 14 };
    dataSheet.mergeCells("A2:E2");
    dataSheet.addRow([]);
    dataSheet.addRow(options.header).font = {
      name: "Times New Roman",
      size: 14
    };
    let dataKeys=Object.keys(options.series[0].data[0]);

    options.series[0].data.forEach(element => {

      dataSheet.addRow([
        element[options.accessColumns[0]],
        element[options.accessColumns[1]]
      ]);
    });
    if(options.tableWithChart.isTableWithChart){
      html2canvas(element).then(canvas => {
      let image;
      element.src = canvas.toDataURL();
      image = workbook.addImage({
        base64: canvas.toDataURL(),
        extension: "png"
      });
      let chartSheet = workbook.addWorksheet("chart");
      chartSheet.addImage(image, {
        tl: { col: 3, row: 3 },
        ext: { width: 500, height: 350 }
      });
      let title = options.tableWithChart.name;
      workbook.xlsx.writeBuffer().then(data => {
        let blob = new Blob([data], {
          type: "application/octet-stream"
        });
        fs.saveAs(blob, `${title}.xlsx`);
      });
    });
    }
    else {
      workbook.xlsx.writeBuffer().then(data => {
        let blob = new Blob([data], {
          type: "application/octet-stream"
        });
        fs.saveAs(blob, `${options.mytitle.text}.xlsx`);
      });
    }
    

  }
 
  public exportAsExcelFile(data,  chartItem) {
    let exportObject = {};
    let workbook: ExcelProper.Workbook = new Excel.Workbook();
    // workbook.creator = 'Me';
    workbook.created = new Date();

    let dataSheet = workbook.addWorksheet("data");

    let titleRow = dataSheet.addRow([data.mytitle.text]);
    titleRow.font = {
      name: "Times New Roman",
      size: 16,
      underline: "double",
      bold: true
    };
    dataSheet.mergeCells("A1:D1");
    let subtitleRow = dataSheet.addRow([data.mytitle.subtitle]);
    subtitleRow.font = { name: "Times New Roman", size: 14 };
    dataSheet.mergeCells("A2:E2");
    

    dataSheet.addRow([]);
    var dataRows = [];
    if (data.xAxis[0].type === "category") {
      dataRows[0] = data.xAxis[0].data;
      dataSheet.addRow([data.xAxis[0].name, data.yAxis[0].name]).font = {
        name: "Times New Roman",
        size: 14
      };
    }

    if (data.yAxis[0].type === "category") {
      dataRows[0] = data.yAxis[0].data;
      dataSheet.addRow([data.yAxis[0].name, data.xAxis[0].name]).font = {
        name: "Times New Roman",
        size: 14
      };
    }
    data.series.forEach(element => {
      if (element.data) {
        dataRows.push(element.data);
      }
    });
    if (dataRows[0]) {
      dataRows[0].forEach((e, i) => {
        let tempArray = [];
        dataRows.forEach(ele => {
          tempArray.push(ele[i]);
        });
        dataSheet.addRow(tempArray).font = {
          name: "Times New Roman",
          size: 12
        };
      });
    }

    html2canvas(chartItem).then(canvas => {
      let image;
      chartItem.src = canvas.toDataURL();
      image = workbook.addImage({
        base64: canvas.toDataURL(),
        extension: "png"
      });
      let chartSheet = workbook.addWorksheet("chart");
      chartSheet.addImage(image, {
        tl: { col: 3, row: 3 },
        ext: { width: 500, height: 350 }
      });
      let title = data.name;
      workbook.xlsx.writeBuffer().then(data => {
        let blob = new Blob([data], {
          type: "application/octet-stream"
        });
        fs.saveAs(blob, `${title}.xlsx`);
      });
    });
  }
}
