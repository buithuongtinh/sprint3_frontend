import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../../model/book';
import {BookDto} from '../../dto/book-dto';
import {BookService} from '../../service/book.service';

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

  constructor(private bookService: BookService) {
    this.searchForm = new FormGroup({
        name: new FormControl(''),
        page: new FormControl(this.page),
        size: new FormControl(this.size),
      }
    );
  }

  ngOnInit(): void {
    this.getListBook();
  }

  getListBook() {
    this.pageBookDTO = this.searchForm.value;
    this.bookService.getListBook(this.pageBookDTO).subscribe(value => {
        this.pageBookDTO = value;
        this.bookList = value.content;
      },
      err =>  {
        this.bookList = [];
        this.errMessage = 'Không có dữ liệu .';
      });
  }

  searchBook() {
    this.page = 0;
    this.searchForm.controls.page.setValue(this.page );
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
}
