import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
export interface AppmenuModel {
  menuID: number;
  menuCode: string;
  menuName: string;
  menuURL: string;
  menuDescription: string;
  status: string;
}
export interface ManageFeature {
  featureCode: string;
  featureName: string;
  featureDescription: string;
  featureID: number;
  status: string;
}
@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
  Appmenu: AppmenuModel[] = [
    { menuID: 1, menuCode: 'M1', menuName: 'Dashboard', menuURL: '10.0.1.101/Dashboard', menuDescription: 'Show Dashboard', status: 'ACTIVE' },
    { menuID: 2, menuCode: 'M2', menuName: 'Troubleshoot Ticket', menuURL: '10.0.1.101/TroubleshootTicket', menuDescription: 'Show Troubleshoot Ticket', status: 'ACTIVE' },
    { menuID: 3, menuCode: 'M3', menuName: 'Playbox Info', menuURL: '10.0.1.101/PlayboxInfo', menuDescription: 'Show Playbox Info', status: 'ACTIVE' },
    { menuID: 4, menuCode: 'M4', menuName: 'Monitor', menuURL: '10.0.1.101/Monitor', menuDescription: 'Show Monitor Log', status: 'INACTIVE' }
  ]
  Feature: ManageFeature[] = [
    { featureID: 1, featureCode: 'F1', featureName: 'Query', featureDescription: 'Query Data', status: 'ACTIVE' },
    { featureID: 2, featureCode: 'F2', featureName: 'Create', featureDescription: 'Create Data', status: 'ACTIVE' },
    { featureID: 3, featureCode: 'F3', featureName: 'Update', featureDescription: 'Update Data', status: 'ACTIVE' },
    { featureID: 4, featureCode: 'F4', featureName: 'Delete', featureDescription: 'Delete Data', status: 'ACTIVE' },
    { featureID: 5, featureCode: 'F5', featureName: 'Export', featureDescription: 'Export Data', status: 'INACTIVE' },
    { featureID: 6, featureCode: 'F6', featureName: 'Import', featureDescription: 'Import Data', status: 'INACTIVE' },
    { featureID: 7, featureCode: 'F7', featureName: 'Send Command', featureDescription: 'Send Command to playbox', status: 'ACTIVE' }
  ];

  @ViewChild('formDrawer') formDrawer!: MatSidenav;

  bodyForm!: FormGroup;
  screenHeight: string = '900px';
  @HostListener('window:resize', ['$event'])
  getScreenHeight() {
    this.screenHeight = `${window.innerHeight - 240}px`;
    // console.log(window.innerHeight);

  }

  constructor(private fb: FormBuilder) {
    this.getScreenHeight();
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.bodyForm = this.fb.group({
      featureCode: [''],
      featureName: [''],
      menuCode: [''],
      menuName: ['']
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
