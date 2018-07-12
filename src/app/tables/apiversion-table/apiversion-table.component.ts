import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { SystemDataConfig } from './systemConfigStubData';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
    ID : any;
    CREATED_BY: any;
    CREATED_ON: any;
    LAST_UPDATED_BY: any;
    LAST_UPDATED_ON: any;
    DESCRIPTION: any;
    VERSION_NUMBER: any;
    API_ID: any;
    IS_ACTIVE:any;
    AUTH_TOKEN:any;
    FILE_LOCATION:any;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
    "ID": "2978d402-792d-11e8-bd82-00059a3c7a00",
   "CREATED_BY": "SYSTEM",
   "CREATED_ON": 1530009551,
   "LAST_UPDATED_BY": "SYSTEM",
   "LAST_UPDATED_ON": 1530009551,
   "DESCRIPTION": "Rental Flow 1.0",
   "VERSION_NUMBER": 1,
   "API_ID": "2972b502-792d-11e8-bd82-00059a3c7a00",
   "IS_ACTIVE": 1,
   "AUTH_TOKEN": "+psCOzLsjs5xSwD3mwqTvA==",
   "FILE_LOCATION": "flow/213-flow-template.xml"
    }
  ]
@Component({
  selector: 'cdk-apiversion-table',
  templateUrl: './apiversion-table.component.html',
  styleUrls: ['./apiversion-table.component.scss']
})
export class ApiVersionTableComponent {
    displayedColumns: string[] = ['ID','CREATED_BY', 'CREATED_ON', 'LAST_UPDATED_BY', 'LAST_UPDATED_ON','DESCRIPTION','VERSION_NUMBER','API_ID','IS_ACTIVE','AUTH_TOKEN','FILE_LOCATION'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}


