import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ApiEndPointTableHelpers } from './helpers.data';
import { MatPaginator, MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { SystemDataConfig } from './systemConfigStubData';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
    ID : any;
    CREATED_BY: any;
    CREATED_ON: any;
    LAST_UPDATED_BY: any;
    LAST_UPDATED_ON: any;
    API_VERSION_ID: any;
    ENDPOINT_ID:any;
   
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      "ID": "29bac3b5-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "API_VERSION_ID": "2978d402-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29bac6a3-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "API_VERSION_ID": "2978d402-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297db56b-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29bac7bc-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "API_VERSION_ID": "2978d402-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29bac88e-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "API_VERSION_ID": "2978d402-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "298029a7-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29bac969-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "API_VERSION_ID": "2978d402-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    }
  ]
@Component({
  selector: 'cdk-apiendpoint-table',
  templateUrl: './apiendpoint-table.component.html',
  styleUrls: ['./apiendpoint-table.component.scss']
})
export class ApiEndPointTableComponent {
      displayedColumns: string[] = ['ID', 'CREATED_BY', 'CREATED_ON', 'LAST_UPDATED_BY','LAST_UPDATED_ON', 'API_VERSION_ID', 'ENDPOINT_ID'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}


