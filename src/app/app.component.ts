import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _unsubscribeAll: Subject<any>;
  user: unknown;
  hideDescript: boolean = true;
  appropriateClass: string = '';
  screenHeight: string = '900px';


  @HostListener('window:resize', ['$event'])
  getScreenHeight() {
    this.screenHeight = `${window.innerHeight - 60}px`;
    console.log(window.innerHeight);
    if (window.innerHeight <= 412) {
      this.appropriateClass = 'bottomRelative';
    } else {
      this.appropriateClass = 'bottomStick';
    }
  }

  constructor(
    public auth: AuthService,
  ) {
    this._unsubscribeAll = new Subject();
    this.getScreenHeight();

    this.auth.authUserStateObservable$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((user) => {
        console.log(user);
        this.user = user;

        // Start notification service
        // this.notiService.start();

      });

  }

  logout(): void {
    this.auth.logout();
  }

  changePassword(): void {

  }
}


