import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ResponsiveTableHelpers } from './helpers.data';
import { MatPaginator, MatDialog, MatTableDataSource, MatSort, MatRow } from '@angular/material';
import { DialogOverviewExampleDialog } from "./DialogOverviewExampleDialog";
import { SystemDataConfig } from './systemConfigStubData';
import { DataSource } from '@angular/cdk/table';
import { WebApiObservableService } from '../../web-api-observable.service';

export interface PeriodicElement {
    ID : any;
    PARAM_NAME: any;
    PARAM_VALUE: any;
    DESCRIPTION: any;
    CREATED_BY: any;
    CREATED_ON: any;
    LAST_UPDATED_BY: any;
    LAST_UPDATED_ON: any;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      "ID": "2a12ad9a-792d-11e8-bd82-00059a3c7a00",
      "PARAM_NAME": "rest.proxy.url",
      "PARAM_VALUE": "\\N",
      "DESCRIPTION": "proxy url for system",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551
    },
    {
      "ID": "2a12afb6-792d-11e8-bd82-00059a3c7a00",
      "PARAM_NAME": "rest.proxy.port.value",
      "PARAM_VALUE": "\\N",
      "DESCRIPTION": "proxy port number for system",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551
    },
    {
      "ID": "2a12b091-792d-11e8-bd82-00059a3c7a00",
      "PARAM_NAME": "rest.proxy.username",
      "PARAM_VALUE": "\\N",
      "DESCRIPTION": "proxy username for system",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551
    },
    {
      "ID": "2a12b0fc-792d-11e8-bd82-00059a3c7a00",
      "PARAM_NAME": "rest.proxy.password",
      "PARAM_VALUE": "\\N",
      "DESCRIPTION": "proxy password for system in encrypted form",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551
    },
    {
      "ID": "2a12b159-792d-11e8-bd82-00059a3c7a00",
      "PARAM_NAME": "rental.online.url",
      "PARAM_VALUE": "http://localhost:8093/213",
      "DESCRIPTION": "Endpoint HTTP url",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551
    },
    {
      "ID": "2a12b1c4-792d-11e8-bd82-00059a3c7a00",
      "PARAM_NAME": "certificate.common.name",
      "PARAM_VALUE": "*.modeloncloud.com",
      "DESCRIPTION": "RA Certificate common name",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551
    },
    {
      "ID": "2a12b22b-792d-11e8-bd82-00059a3c7a00",
      "PARAM_NAME": "certificate.alias.name",
      "PARAM_VALUE": "RA_CLIENT-RA-intcert",
      "DESCRIPTION": "RA Certificate alias name",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551
    }
  ]
@Component({
  selector: 'cdk-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit{

  constructor(public dialog: MatDialog, private userRestAPI: WebApiObservableService) {}
  highlightedRows = [];
  displayedColumns: string[] = ['ID', 'PARAM_NAME', 'PARAM_VALUE', 'DESCRIPTION','CREATED_BY', 'CREATED_ON', 'LAST_UPDATED_BY', 'LAST_UPDATED_ON'];
 
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit() {
    //this.userRestAPI.getService('');
    this.userRestAPI.getService('').subscribe(
      result => {
      }, err => { })

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openRecordDialog(row:MatRow) {
    console.log(row);
    console.log("Entered opendialog function");
   // console.log(this.displayedColumns);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
     

    
}



