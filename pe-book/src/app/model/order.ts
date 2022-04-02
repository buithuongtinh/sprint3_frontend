import {User} from './user';
import {Book} from './book';

export interface Order {
  id: number;
  orderDate: string;
  totalMoney: string;
  quantity: number;
  user: User;
  books: Book;
}
