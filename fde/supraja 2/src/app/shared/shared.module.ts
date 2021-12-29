import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PageService } from "./services/pages/pages.service";
import { StorageService } from "./services/storage/storage.service";
import { SpinnerService } from "./services/spinner/spinner.service";
import {
  MatProgressSpinnerModule,
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";

import { SpinnerComponent } from "./components/spinner/spinner.component";
import { DynamicChartComponent } from "./components/dynamic-chart/dynamic-chart.component";

import { NgxEchartsModule } from "ngx-echarts";
import { MatchDirective } from "./directives/forms/matchcase.directive";
import { ExcelService } from "./services/excel/excel.service";
import { SplitStringPipe } from "./pipes/split-string.pipe";
import { DoughnutChartComponent } from "./components/dynamic-chart/doughnut-chart/doughnut-chart.component";
import { BarLineChartComponent } from "./components/dynamic-chart/bar-line-chart/bar-line-chart.component";
import { PieDougnutChartComponent } from "./components/dynamic-chart/pie-dougnut-chart/pie-dougnut-chart.component";
import { TableChartComponent } from "./components/dynamic-chart/table-chart/table-chart.component";
import { MultiChartComponent } from "./components/dynamic-chart/multi-chart/multi-chart.component";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { FieldFormaterPipe } from "./pipes/field-formater.pipe";
import { DragDropDirective } from "./directives/drag-drop.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    NgxEchartsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    SpinnerComponent,
    DynamicChartComponent,
    SplitStringPipe,
    DoughnutChartComponent,
    ConfirmDialogComponent,
    FieldFormaterPipe,
    DragDropDirective
  ],
  declarations: [
    SpinnerComponent,
    DynamicChartComponent,
    MatchDirective,
    SplitStringPipe,
    DoughnutChartComponent,
    BarLineChartComponent,
    PieDougnutChartComponent,
    TableChartComponent,
    MultiChartComponent,
    ConfirmDialogComponent,
    FieldFormaterPipe,
    DragDropDirective
  ],
  providers: [
    PageService,
    StorageService,
    SpinnerService,
    ExcelService
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule {
  constructor() {}
}
