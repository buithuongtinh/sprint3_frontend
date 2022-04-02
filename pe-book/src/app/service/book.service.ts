import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookDto} from '../dto/book-dto';
import {Book} from '../model/book';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getProduct() {
    return this.http.get<any>(this.API_URL + '/book/list').pipe(map((res: any) => {
      return res;
    }));
  }

  getOrder(): Observable<any> {
    return this.http.get<any>(this.API_URL + '/book/OderDetail');
  }

  getListBook(bookDTO: BookDto): Observable<any> {
    const name = bookDTO.name;
    const page = bookDTO.page;
    const size = bookDTO.size;
    return this.http.get<any>(this.API_URL + '/book?name=' + name + '&page=' + page + '&size=' + size);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + '/book/detail/' + id);
  }
}
