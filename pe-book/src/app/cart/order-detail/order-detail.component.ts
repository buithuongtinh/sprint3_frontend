import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Order} from '../../model/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  oderDetail: Order[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getOrder();
  }
  private getOrder() {
    this.bookService.getOrder().subscribe(value => {
      this.oderDetail = value;
    }, error => {
      console.log('trong');
    });
  }
}
