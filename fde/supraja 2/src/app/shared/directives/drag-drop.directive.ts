import {
  Directive,
  Output,
  HostListener,
  HostBinding,
  EventEmitter
} from "@angular/core";

@Directive({
  selector: "[tedDragDrop]"
})
export class DragDropDirective {
  @Output() onFileDropped = new EventEmitter();

  @HostBinding("style.background-color") private background = "#f5fcff";
  @HostBinding("style.opacity") private opacity = "1";
  constructor() {}

  @HostListener("dragover", ["$event"])
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#9ecbec";
    this.opacity = "0.8";
  }
  @HostListener("dragleave", ["$event"])
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#f5fcff";
    this.opacity = "1";
  }
  @HostListener("drop", ["$event"])
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#f5fcff";
    this.opacity = "1";
    let fileObject = {
      target: {}
    };
    let files = event.dataTransfer.files;
    if (files.length > 0) {
      fileObject["target"]["files"] = event.dataTransfer.files;
      this.onFileDropped.emit(fileObject);
    }
  }
}
