import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pushContent: string;

  getUpdatedContentPosition() {
    console.log("pushContent "+this.pushContent);
    return this.pushContent;
  }

}
