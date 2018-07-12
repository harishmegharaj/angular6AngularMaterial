import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EpConfigTableHelpers } from './helpers.data';
import { MatPaginator, MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { SystemDataConfig } from './systemConfigStubData';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
    ID : any;
    CREATED_BY: any;
    CREATED_ON: any;
    LAST_UPDATED_BY: any;
    LAST_UPDATED_ON: any;
    CONFIG_VALUE:any;
    CONFIG_KEY_ID:any;
    ENDPOINT_ID:any;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {
      "ID": "29cde640-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "com.mysql.jdbc.Driver",
      "CONFIG_KEY_ID": "298503a7-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29cde846-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "jdbc:mysql://localhost:3306/mls_listing",
      "CONFIG_KEY_ID": "29863dc1-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29cde921-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "root",
      "CONFIG_KEY_ID": "2987795f-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29cde9f2-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "2988ad5f-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29cdeab2-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "10000",
      "CONFIG_KEY_ID": "2989e905-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29cdeb4a-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "28200",
      "CONFIG_KEY_ID": "298b22dc-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29cdebbe-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "5",
      "CONFIG_KEY_ID": "298c57c8-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29cdec29-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "60000",
      "CONFIG_KEY_ID": "298d92ab-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29cdec9d-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "true",
      "CONFIG_KEY_ID": "298ec8b0-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297c7b20-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29d9ec69-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "http://10.173.39.207:20550/dh_ods_rr:avm_subj_dtls_rr",
      "CONFIG_KEY_ID": "29901d40-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297db56b-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29d9ef57-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "29913a41-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297db56b-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29d9f032-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "299274fc-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297db56b-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29d9f0fa-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "3",
      "CONFIG_KEY_ID": "2993ab25-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297db56b-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29d9f1b1-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "10",
      "CONFIG_KEY_ID": "29b22bca-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297db56b-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29d9f264-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "2994e5c0-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297db56b-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29d9f381-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "29961e29-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297db56b-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29e74d90-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "http://10.173.39.207:18987/solr/rrcompsv4-d01_shard1_replica1",
      "CONFIG_KEY_ID": "29901d40-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29e75044-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "",
      "CONFIG_KEY_ID": "29913a41-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29e7511f-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "",
      "CONFIG_KEY_ID": "299274fc-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29e751da-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "3",
      "CONFIG_KEY_ID": "2993ab25-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29e752a3-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "10",
      "CONFIG_KEY_ID": "29b22bca-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29e7535a-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "2994e5c0-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29e7541a-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "29961e29-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29e754b6-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "100",
      "CONFIG_KEY_ID": "29b5eff3-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29f382f7-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "http://10.173.39.207:20550/dh_ods_rr:avm_comp_dtls/multiget",
      "CONFIG_KEY_ID": "29901d40-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "298029a7-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29f38525-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "",
      "CONFIG_KEY_ID": "29913a41-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "298029a7-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29f38608-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "",
      "CONFIG_KEY_ID": "299274fc-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "298029a7-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29f38685-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "3",
      "CONFIG_KEY_ID": "2993ab25-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "298029a7-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29f3870f-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "10",
      "CONFIG_KEY_ID": "29b22bca-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "298029a7-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29f3878c-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "2994e5c0-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "298029a7-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "29f38809-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "29961e29-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "298029a7-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a0234b9-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "http://10.56.0.45:20550/dh_ods_rr:avm_comp_dtls/multiget",
      "CONFIG_KEY_ID": "29901d40-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a023862-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "EMW/r4+0OZCi0rs+ux7cETkwWIpSAYw/8BOAyGdLIy9tHv9d2z/GN4u27UwRgjp3",
      "CONFIG_KEY_ID": "29975614-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a0239a8-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "rentAVM",
      "CONFIG_KEY_ID": "29988ccc-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a023ab8-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "5",
      "CONFIG_KEY_ID": "2999c9b4-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a023b61-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": null,
      "CONFIG_KEY_ID": "299afdc6-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a023c33-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "300",
      "CONFIG_KEY_ID": "29913a41-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a023cbd-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "60",
      "CONFIG_KEY_ID": "299274fc-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a023d43-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "3",
      "CONFIG_KEY_ID": "2993ab25-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a023dc5-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "10",
      "CONFIG_KEY_ID": "29b22bca-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "29815ec9-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e033-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.45",
      "CONFIG_KEY_ID": "299c3bfd-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e2c3-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0",
      "CONFIG_KEY_ID": "299d6d49-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e3b8-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.3",
      "CONFIG_KEY_ID": "299ea92e-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e485-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.2",
      "CONFIG_KEY_ID": "299fde23-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e53c-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.4",
      "CONFIG_KEY_ID": "29a117ed-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e601-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.1",
      "CONFIG_KEY_ID": "29a25197-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e6a1-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.45",
      "CONFIG_KEY_ID": "29a388fd-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e7a0-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.025",
      "CONFIG_KEY_ID": "29a4c3bb-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e849-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.025",
      "CONFIG_KEY_ID": "29a5f8f3-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e8f3-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.05",
      "CONFIG_KEY_ID": "29a73304-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05e99c-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.2",
      "CONFIG_KEY_ID": "29a86a80-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05ea4a-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.5",
      "CONFIG_KEY_ID": "29a9a2dc-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05eaf0-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.1",
      "CONFIG_KEY_ID": "29aae8c2-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05eb9e-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.1",
      "CONFIG_KEY_ID": "29ac1472-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05ec55-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.1",
      "CONFIG_KEY_ID": "29ad4d9a-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05ed03-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "1",
      "CONFIG_KEY_ID": "29ae88b2-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05edba-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.75",
      "CONFIG_KEY_ID": "29afbcd6-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05ee75-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "0.5",
      "CONFIG_KEY_ID": "29b0fbbf-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05ef54-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "ND",
      "CONFIG_KEY_ID": "29b36b6e-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    },
    {
      "ID": "2a05f021-792d-11e8-bd82-00059a3c7a00",
      "CREATED_BY": "SYSTEM",
      "CREATED_ON": 1530009551,
      "LAST_UPDATED_BY": "SYSTEM",
      "LAST_UPDATED_ON": 1530009551,
      "CONFIG_VALUE": "N",
      "CONFIG_KEY_ID": "29b4a0d3-792d-11e8-bd82-00059a3c7a00",
      "ENDPOINT_ID": "297ee942-792d-11e8-bd82-00059a3c7a00"
    }
  ]
@Component({
  selector: 'cdk-epconfig-table',
  templateUrl: './epconfig-table.component.html',
  styleUrls: ['./epconfig-table.component.scss']
})
export class EpConfigTableComponent {
    displayedColumns: string[] = ['ID','CREATED_BY', 'CREATED_ON', 'LAST_UPDATED_BY', 'LAST_UPDATED_ON','CONFIG_VALUE','CONFIG_KEY_ID','ENDPOINT_ID'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}


