import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private bookService: BookService, private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDetail();
  }

  private getDetail() {
    this.active.params.subscribe(param => {
      this.id = param.id;
    });
    this.bookService.findById(this.id).subscribe(value => {
      this.book = value;
      console.log(this.book);
    });
  }
}
