import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarListBaseComponent } from './toolbar-list-base/toolbar-list-base.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';
import { TableBaseComponent } from './table-base/table-base.component';



@NgModule({
  declarations: [
    ToolbarListBaseComponent,
    TableBaseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToolbarListBaseComponent,
    TableBaseComponent
  ]
})
export class ComponentsModule { }
