import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  displayText: string = 'Hello World!';
  btnText: string = 'Hide';
  showDisplayText: boolean = true;

  btnClicked(): void {
    this.showDisplayText = !(this.showDisplayText);
    this.btnText = this.showDisplayText? 'Hide': 'Show';
  }
}
