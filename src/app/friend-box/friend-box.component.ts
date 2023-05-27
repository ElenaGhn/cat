import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-box',
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss'],
})
export class FriendBoxComponent {
  names = ['John', 'Miya', 'Don', 'Aang'];
  texts = ['2 Years old', 'Loves to play', 'The Lonely One', 'Just Black'];
  images = [
    'assets/img/cat5.jpg',
    'assets/img/cat6.jpg',
    'assets/img/cat7.jpg',
    'assets/img/catsEyes.jpg',
  ];

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
