import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postText = [
    'Hello, my name is Lola... I am here because I want to',
    'Hi, I am Henry and I have nothing to tell you!!!',
    'Hello, My name is Tommy, I am way to happy to be here',
    'Hi you all, Nice to meet you, my name is Sammy',
  ];

  postImages = [
    'assets/img/cat1.jpg',
    'assets/img/cat2.jpg',
    'assets/img/cat3.jpg',
    'assets/img/cat4.jpg',
  ];

  buttonClicked() {
    alert('Not today');
  }
}
