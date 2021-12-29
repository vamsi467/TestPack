import { Injectable } from "@angular/core";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
@Injectable({
  providedIn: "root"
})
export class ExcelService {
  constructor() {}

  exportPdf(chartItem, options) {
    html2canvas(chartItem, options).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm");
      doc.addImage(imgData, "PNG", 10, 10);
      doc.save("sample-file.pdf");
    });
  }
}
