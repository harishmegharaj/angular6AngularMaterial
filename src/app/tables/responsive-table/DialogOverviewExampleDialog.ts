import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
    ID:string;
    constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
     @Inject(MAT_DIALOG_DATA) data) {
        this.ID= data.ID;
       // console.log(this.data);
     }

     
     ngOnInit() {
        // will log the entire data object
        console.log("dialog .ts page")
       // console.log(this.data)
      }
    onNoClick(): void {
        this.dialogRef.close();
    }
    
         
}