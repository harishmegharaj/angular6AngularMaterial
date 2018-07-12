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
    DESCRIPTION:any;
    NAME :any;
    CODE: any;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      "ID": "297c7b20-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "DESCRIPTION": "Databse end point for ODS",
      "NAME": "ODS_DB_ENDPOINT",
      "CODE": "ODSDB"
    },
    {
      "ID": "297db56b-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "DESCRIPTION": "Hbase end point for fetching subject property characteristics",
      "NAME": "SUB_PROP_CHAR_HBASE",
      "CODE": "SBJHBASE"
    },
    {
      "ID": "297ee942-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "DESCRIPTION": "Solr end point for fetching comps for given subject property",
      "NAME": "CMP_PROP_SOLR",
      "CODE": "CMPSOLR"
    },
    {
      "ID": "298029a7-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "DESCRIPTION": "Hbase end point for fetching comp property characteristics",
      "NAME": "COMP_PROP_CHAR_HBASE",
      "CODE": "CMPHBASE"
    },
    {
      "ID": "29815ec9-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "DESCRIPTION": "REALAnalytics end point for model exectuion",
      "NAME": "REALAnalytics",
      "CODE": "RA"
    }
  ]
@Component({
  selector: 'cdk-endpoint-table',
  templateUrl: './endpoint-table.component.html',
  styleUrls: ['./endpoint-table.component.scss']
})
export class EndPointTableComponent {
      displayedColumns: string[] = ['ID', 'CREATED_BY', 'CREATED_ON', 'LAST_UPDATED_BY','LAST_UPDATED_ON', 'DESCRIPTION', 'NAME', 'CODE'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}


