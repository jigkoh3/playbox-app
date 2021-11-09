import { Component, HostListener, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSidenav } from '@angular/material/sidenav';


export interface ManageFeature {
  FeatureID: number;
  FeatureCode: string;
  FeatureName: string;
  FeatureDescription: string;
  Status: string;
}

const feature: ManageFeature[] = [
  { FeatureID: 1, FeatureCode: 'F1', FeatureName: 'Query', FeatureDescription: 'Query Data', Status: 'ACTIVE' },
  { FeatureID: 2, FeatureCode: 'F2', FeatureName: 'Create', FeatureDescription: 'Create Data', Status: 'ACTIVE' },
  { FeatureID: 3, FeatureCode: 'F3', FeatureName: 'Update', FeatureDescription: 'Update Data', Status: 'ACTIVE' },
  { FeatureID: 4, FeatureCode: 'F4', FeatureName: 'Delete', FeatureDescription: 'Delete Data', Status: 'ACTIVE' },
  { FeatureID: 5, FeatureCode: 'F5', FeatureName: 'Export', FeatureDescription: 'Export Data', Status: 'INACTIVE' },
  { FeatureID: 6, FeatureCode: 'F6', FeatureName: 'Import', FeatureDescription: 'Import Data', Status: 'INACTIVE' },
  { FeatureID: 7, FeatureCode: 'F7', FeatureName: 'Send Command', FeatureDescription: 'Send Command to playbox', Status: 'ACTIVE' }
];

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements AfterViewInit {
  displayedColumns: string[] = ['FeatureID', 'FeatureCode', 'FeatureName', 'FeatureDescription', 'Status'];
  dataSource = new MatTableDataSource<ManageFeature>(feature);

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
      featureID: [''],
      featureCode: ['', Validators.required],
      featureName: ['', Validators.required],
      featureDescription: ['', Validators.required],
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
