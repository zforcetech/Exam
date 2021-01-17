import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'src/app/model/problem';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() problem: Problem;

}
