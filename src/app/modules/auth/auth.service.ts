import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;
  private jwtHelper: JwtHelperService = new JwtHelperService();
  // private mockupToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYwNmY2ZDNiOWM4MTVmZmJjNjY2ZDciLCJmaXJzdE5hbWUiOiJUaGVlcmFzYWsiLCJsYXN0TmFtZSI6IlR1YnJpdCIsImVtYWlsIjoidGhlZXJhc2FrLnR1YnJpdEBnbWFpbC5jb20iLCJjb21wYW55Q29kZSI6IlBZVDEiLCJyb2xlcyI6ImFkbWluIiwiaWF0IjoxNjA5NTk2MTEzLCJleHAiOjE2MTY3OTYxMTN9.Ce0KxgXb86wUYIk1Xna4BCl2Z5oT4Ym2ru83Iy-SfhQ';

  private authStateChanged$ = new BehaviorSubject<boolean>(false);
  public authStateObservable$ = this.authStateChanged$.asObservable();

  private authUserStateChanged$ = new BehaviorSubject<any>(null);
  public authUserStateObservable$ = this.authUserStateChanged$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.authStateChanged$.next(this.isAuthenticated());
  }


  public login(payLoad: any): void {
    this.httpClient.post(`${environment.apiUrl}/api/auth/signin`, payLoad).subscribe((data: any) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      this.authStateChanged$.next(this.isAuthenticated());
      this.router.navigate(['']);
    })

  }

  public register(payLoad: any): void {
    this.httpClient.post(`${environment.apiUrl}/api/auth/signup`, payLoad).subscribe((data: any) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      this.authStateChanged$.next(this.isAuthenticated());
      this.router.navigate(['']);
    })

  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.authStateChanged$.next(this.isAuthenticated());
    this.router.navigate(['auth/login']);
  }

  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem('access_token');

    // Get User information
    const userInfo = this.jwtHelper.decodeToken(token);
    this.user = userInfo;
    // if(userInfo) this.getUserAccounts(userInfo.email);
    this.authUserStateChanged$.next(userInfo);
    // Check whether the token is expired and return
    // true or false

    return !this.jwtHelper.isTokenExpired(token);

  }

  public token(): string {
    const token: any = localStorage.getItem('access_token');
    return token;
  }

  public refreshToken(): void {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      const payLoad = { refresh_token: refreshToken};
      this.httpClient.post(`${environment.apiUrl}/api/auth/refresh`, payLoad).subscribe((data: any) => {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        this.authStateChanged$.next(this.isAuthenticated());
        this.router.navigate(['']);
      })
    }

  }


}
