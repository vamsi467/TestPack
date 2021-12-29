import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ted-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent  implements OnInit {
  actions: string[];
  event;
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.actions = data.actions;
}
  ngOnInit() {}
    
    cancel() {
        this.dialogRef.close(false);
    }

    delete() {
        this.dialogRef.close(true);
    }

}
