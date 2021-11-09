import { Component, HostListener, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenav } from '@angular/material/sidenav';

export interface ManageMenu {
  MenuID: number;
  MenuCode: string;
  MenuName: string;
  MenuURL: string;
  MenuDescription: string;
  Status: string;
}

const menu: ManageMenu[] = [
  { MenuID: 1, MenuCode: 'M1', MenuName: 'Dashboard', MenuURL: '10.0.1.101/Dashboard', MenuDescription: 'Show Dashboard', Status: 'ACTIVE' },
  { MenuID: 2, MenuCode: 'M2', MenuName: 'Troubleshoot Ticket', MenuURL: '10.0.1.101/TroubleshootTicket', MenuDescription: 'Show Troubleshoot Ticket', Status: 'ACTIVE' },
  { MenuID: 3, MenuCode: 'M3', MenuName: 'Playbox Info', MenuURL: '10.0.1.101/PlayboxInfo', MenuDescription: 'Show Playbox Info', Status: 'ACTIVE' },
  { MenuID: 4, MenuCode: 'M4', MenuName: 'Monitor', MenuURL: '10.0.1.101/Monitor', MenuDescription: 'Show Monitor Log', Status: 'INACTIVE' }
];
@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements AfterViewInit {
  displayedColumns: string[] = ['MenuID', 'MenuCode', 'MenuName', 'MenuURL', 'MenuDescription', 'Status'];
  dataSource = new MatTableDataSource<ManageMenu>(menu);

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
      menuID: [''],
      menuCode: ['', Validators.required],
      menuName: ['', Validators.required],
      menuURL: ['', Validators.required],
      menuDescription: ['', Validators.required],
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
