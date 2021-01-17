import { Problem } from "./problem";

export class ProblemSet {

    public problems: Problem[];

    constructor() {
        this.problems = [new Problem("one"), new Problem("two"), new Problem("three"), new Problem("four")];
    }

    getProblems() {
        return [new Problem("one"), new Problem("two"), new Problem("three"), new Problem("four")];
    }
}