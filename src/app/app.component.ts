import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catchphrase';
  inPlay: boolean;

  ngOnInit () {
    this.inPlay = false;
  }
  
  toggleDisplay() {
    this.inPlay = !this.inPlay;
  }
}
