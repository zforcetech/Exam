import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/model/problem';
import { ProblemSet } from 'src/app/model/problemSet';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  problemSet: ProblemSet = new ProblemSet();
  initialProblem: Problem = new ProblemSet().getProblems()[0];

}
