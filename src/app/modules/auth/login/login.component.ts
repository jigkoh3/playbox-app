import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private _unsubscribeAll: Subject<any>;
  constructor(
    private formbuilder: FormBuilder,
    private auth: AuthService
  ) {
    this._unsubscribeAll = new Subject();
    this.form = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    let payload = this.form.getRawValue();
    if (payload) {
      this.auth.login(payload);
    }

  }

}
