import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  public title: string;

  constructor() { 
    this.title = 'Avatar';
  }

  ngOnInit() {
  }

}
