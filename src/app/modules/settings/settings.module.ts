import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RoleComponent } from './role/role.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { FeatureComponent } from './feature/feature.component';
import { PermissionComponent } from './permission/permission.component';
import { ListRoleComponent } from './permission/list-role/list-role.component';
import { TableMenuComponent } from './permission/table-menu/table-menu.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    SettingsComponent,
    RoleComponent,
    AppMenuComponent,
    FeatureComponent,
    PermissionComponent,
    ListRoleComponent,
    TableMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SettingsModule { }
