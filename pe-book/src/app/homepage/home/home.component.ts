import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../../model/book';
import {BookDto} from '../../dto/book-dto';
import {BookService} from '../../service/book.service';
import {CartService} from '../../service/cart.service';
import {Cart} from '../../model/cart';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 0;
  size = 20;
  pageBook: any;
  bookList: Book[];
  searchForm: FormGroup;
  pageBookDTO: BookDto;
  errMessage: string;
  p: number;

  public productList: any;
  public filterCategory: any;

  constructor(
    private bookService: BookService,
    private cartService: CartService,
  ) {
    this.searchForm = new FormGroup({
        name: new FormControl(''),
        page: new FormControl(this.page),
        size: new FormControl(this.size),
      }
    );
  }

  ngOnInit(): void {
    this.getListBook();
    this.bookService.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.bookList.forEach((a: any) => {
        // if (a.category === 'women\'s clothing' || a.category === 'men\'s clothing') {
        //   a.category = 'fashion';
        // }
        Object.assign(a, {quantity: 1, total: a.price});
      });
      console.log(this.productList);
    });
  }

  getListBook() {
    this.pageBookDTO = this.searchForm.value;
    this.bookService.getListBook(this.pageBookDTO).subscribe(value => {
        this.pageBookDTO = value;
        this.bookList = value.content;
      },
      err => {
        this.bookList = [];
        this.errMessage = 'Không có dữ liệu .';
      });
  }

  searchBook() {
    this.page = 0;
    this.searchForm.controls.page.setValue(this.page);
    this.pageBookDTO = this.searchForm.value;
    this.bookService.getListBook(this.pageBookDTO).subscribe(value => {
        this.pageBook = value;
        this.bookList = value.content;
        this.ngOnInit();
      },
      error => {
        this.bookList = [];
        this.errMessage = 'Không có Sách cần tìm.';
      });
  }


  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
