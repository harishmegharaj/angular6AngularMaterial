import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { DialogOverviewExampleDialog } from './responsive-table/DialogOverviewExampleDialog';
import { ApiTableComponent } from './api-table/api-table.component';
import { ApiEndPointTableComponent } from './apiendpoint-table/apiendpoint-table.component';
import { ApiVersionTableComponent } from './apiversion-table/apiversion-table.component';
import { EndPointTableComponent } from './endpoint-table/endpoint-table.component';
import { EpConfigTableComponent } from './epconfig-table/epconfig-table.component';

const materialWidgetRoutes: Routes = [
     { path: 'responsive', component: ResponsiveTableComponent ,data: { animation: 'responsive' }},
     { path: 'api', component: ApiTableComponent ,data: { animation: 'responsive' }},
     { path: 'apiendpoint', component: ApiEndPointTableComponent ,data: { animation: 'responsive' }},
     { path: 'apiversion', component: ApiVersionTableComponent ,data: { animation: 'responsive' }},
     { path: 'endpoint', component: EndPointTableComponent ,data: { animation: 'responsive' }},
     { path: 'epconfig', component: EpConfigTableComponent ,data: { animation: 'responsive' }},
     { path: 'responsive', component: DialogOverviewExampleDialog ,data: { animation: 'responsive' }}

];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}