import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    ComponentsModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    ComponentsModule,
  ]
})
export class SharedModule { }
