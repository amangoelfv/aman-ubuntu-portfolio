import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  now: Date = new Date();
  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  date: string = '';
  ngOnInit(): void {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    this.date = `${days[this.now.getDay()]} ${monthNames[this.now.getMonth()]} ${this.now.getDate()} ${this.now.getHours() < 10 ? '0' : ''}${this.now.getHours()}:${this.now.getMinutes() < 10 ? '0' : ''}${this.now.getMinutes()}`;
  }

}
