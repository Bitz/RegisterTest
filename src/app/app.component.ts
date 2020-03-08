import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  = 'LOGIN';
  step = 1;
  key = '';

  setKey($event: string) {
    this.key = $event;
  }

  setStep($event: number) {
    this.step = $event;
    switch ($event) {
      case 1:
        this.title = 'LOGIN';
        break;
      case 2:
        this.title = 'CONTACT INFORMATION';
        break;
      case 3:
        this.title = 'COMPLETE';
        break;
    }
  }
}
