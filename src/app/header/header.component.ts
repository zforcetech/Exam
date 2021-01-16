import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  brandName: string = "My Survey";
  @Output() pushContentEmitter = new EventEmitter<void>();

  ngOnInit(): void {
  }

  pushContent() {
    this.pushContentEmitter.emit();
  }

}
