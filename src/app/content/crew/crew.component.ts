import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/model/problem';
import { ProblemSet } from 'src/app/model/problemSet';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  problemSet: ProblemSet = new ProblemSet();
  initialProblem: Problem = new ProblemSet().getProblems()[0];

}
