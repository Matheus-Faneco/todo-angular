import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8000/api/users/user'
  private userLoginUrl = 'http://localhost:8000/api/users/login'
  private userRegisterUrl = 'http://localhost:8000/api/users/register';
  private userLogoutUrl = 'http://localhost:8000/api/users/logout';

  constructor(
    private http: HttpClient
  ) { }

  checkUser(option?: Object): Observable<any> {
    return this.http.get<any>(this.userUrl, option);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.userRegisterUrl, user);
  }

  loginUser(user: User, option?: Object): Observable<User> {
    return this.http.post<User>(this.userLoginUrl, user, option);
  }

  logoutUser(option?: Object): Observable<any> {
    return this.http.post<any>(this.userLogoutUrl, {}, option);
  }

}
