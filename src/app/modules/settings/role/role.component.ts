import { Component, HostListener, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenav } from '@angular/material/sidenav';

export interface ManageRole {
  RoleID: number;
  RoleCode: string;
  RoleName: string;
  RoleDescription: string;
  Status: string;
}

const role: ManageRole[] = [
  { RoleID: 1, RoleCode: 'L1', RoleName: 'Call Center', RoleDescription: 'Call Center', Status: 'ACTIVE' },
  { RoleID: 2, RoleCode: 'L2', RoleName: 'NOC', RoleDescription: 'NOC', Status: 'INACTIVE' },
  { RoleID: 3, RoleCode: 'L3', RoleName: 'Support', RoleDescription: 'Support', Status: 'INACTIVE' }
];
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})

export class RoleComponent implements AfterViewInit {
  displayedColumns: string[] = ['RoleID', 'RoleCode', 'RoleName', 'RoleDescription', 'Status'];
  dataSource = new MatTableDataSource<ManageRole>(role);

  @ViewChild('formDrawer') formDrawer!: MatSidenav;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  bodyForm!: FormGroup;
  screenHeight: string = '900px';
  private _unsubscribeAll: Subject<any>;

  @HostListener('window:resize', ['$event'])
  getScreenHeight() {
    this.screenHeight = `${window.innerHeight - 240}px`;
    // console.log(window.innerHeight);

  }

  constructor(private fb: FormBuilder) {
    this._unsubscribeAll = new Subject<any>();
    this.getScreenHeight();
    this.createForm();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  createForm(): void {
    this.bodyForm = this.fb.group({
      roleID: [''],
      roleCode: ['', Validators.required],
      roleName: ['', Validators.required],
      roleDescription: ['', Validators.required],
      status: [''],
      isActive: true
    });
  }

  addNew(): void {
    this.createForm();
    this.formDrawer.toggle();
  }

  onSubmit() {
    const payload = this.bodyForm.getRawValue();
    console.log(payload);
    this.formDrawer.toggle();
  }
}

