import {User} from './user';
import {BookType} from './book-type';

export interface Book {
  id: number;
  image: string;
  author: string;
  name: string;
  code: string;
  translator: string;
  publisher: string;
  page: number;
  size: string;
  issue: string;
  price: string;
  introduce: string;
  users: User;
  bookType: BookType ;

}
