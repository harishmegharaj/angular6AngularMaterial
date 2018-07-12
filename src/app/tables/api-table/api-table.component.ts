import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ApiTableHelpers } from './helpers.data';
import { MatPaginator, MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { DialogOverviewExampleDialog } from "./DialogOverviewExampleDialog";
import { SystemDataConfig } from './systemConfigStubData';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
    ID : any;
    CREATED_BY: any;
    CREATED_ON: any;
    LAST_UPDATED_BY: any;
    LAST_UPDATED_ON: any;
    API_CODE: any;
    API_NAME: any;
    DESCRIPTION:any;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
   
    {
      "ID": "2972b502-792d-11e8-bd82-00059a3c7a00",
   "CREATED_BY": "SYSTEM",
   "CREATED_ON": 1530009551,
   "LAST_UPDATED_BY": "SYSTEM",
   "LAST_UPDATED_ON": 1530009551,
   "API_CODE": 213,
   "API_NAME": 213,
   "DESCRIPTION": "Rental AVM calculation flow"
     
    }
  ]
@Component({
  selector: 'cdk-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.scss']
})
export class ApiTableComponent {
    displayedColumns: string[] = ['ID', 'CREATED_BY', 'CREATED_ON', 'LAST_UPDATED_BY','LAST_UPDATED_ON', 'API_CODE', 'API_NAME', 'DESCRIPTION'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}


