import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authDataKey = "authData";
  private tokenKey = "token"

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  get currentUser(): any {
    return JSON.parse(<string>sessionStorage.getItem(this.authDataKey));
  }

  get token(): string | null {
    return sessionStorage.getItem(this.tokenKey) as string;
  }

  get isLogged(): boolean {
    return !!this.token;
  }

  signup(user: any) {
    const data = {
      "email":"s@gmail.com",
      "password":"123",
      "fullName":"Sanzhar",
      "gender":"Male",
      "age":19
    }
    return this.http.post(`/api/accounts`, data);
  }

  login(user: any) {
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);

    return this.http.post(`/api/auth/token`, formData).pipe(
      map((response: any) => {
        sessionStorage.setItem(this.authDataKey, JSON.stringify(response.data));
        sessionStorage.setItem(this.tokenKey, response.token.accessToken);
        return response;
      })
    )

    // let loggedUser: any = {
    //   id: 1,
    //   username: 'test',
    //   role: 'USER',
    // }
    //
    // sessionStorage.setItem(this.authDataKey, JSON.stringify(loggedUser));
    // sessionStorage.setItem(this.tokenKey, "token");
    //
    // this.router.navigateByUrl('/');

    // return this.currentUser;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/signin');
  }

}
