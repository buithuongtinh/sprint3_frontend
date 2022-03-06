import {Role} from './role';
import {Book} from './book';

export interface User {
  id: number;
  username: string;
  name: string;
  password: string;
  birthday: string;
  gender: number;
  email: string;
  phone: string;
  address: string;
  roles: Role;
  books: Book;
}
