import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;
  bodyForm: FormGroup;
  screenHeight: string = '900px';
  @HostListener('window:resize', ['$event'])
  getScreenHeight() {
    this.screenHeight = `${window.innerHeight - 240}px`;
    // console.log(window.innerHeight);

  }

  constructor(private fb: FormBuilder) {
    this._unsubscribeAll = new Subject<any>();
    this.getScreenHeight();

    this.bodyForm = this.fb.group({
      roleCode: ['', Validators.required],
      roleName: ['', Validators.required],
      isActive: true
    });
  }

  ngOnInit(): void {
  }

}
