import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exam';
  contentPushed: boolean = false;
  

  updateTrigger() {
    this.contentPushed = !this.contentPushed;
  }

  getNewStyle() {
    if (this.contentPushed)
      return "content-pushed";
    else
      return "";
  }

}
