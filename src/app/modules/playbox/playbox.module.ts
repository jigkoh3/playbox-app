import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayboxComponent } from './playbox.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: PlayboxComponent
  }
];

@NgModule({
  declarations: [
    PlayboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PlayboxModule { }
