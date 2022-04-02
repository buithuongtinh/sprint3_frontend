import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }
  findInfo(id: number): Observable<User> {
    return this.http.get<User>(this.API_URL + '/book/info/' + id);
  }
}
