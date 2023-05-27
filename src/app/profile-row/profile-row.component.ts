import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent {
  @Input() names = 'Lola';
  @Input() img = 'assets/img/cat1.jpg';
  @Input() description = '2 Years old';

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
