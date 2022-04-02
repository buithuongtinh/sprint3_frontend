import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: User;
  id: number;

  constructor(
    private user: UserService,
    private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDetail();
  }

  private getDetail() {
    this.active.params.subscribe(param => {
      this.id = param.id;
    });
    this.user.findInfo(this.id).subscribe(value => {
      this.info = value;
      console.log(this.info);
    });
  }

}
