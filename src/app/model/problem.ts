
export class Problem {

    public setCode: string;
    public category: string;
    public statement: string;
    public totalChoice: number;
    public choice_A: string;
    public choice_B: string;
    public choice_C: string;
    public choice_D: string;
    public choice_E: string;
    public choice_F: string;
    public problemType: string;
    public image: string;
    public problemId: number;

    constructor(setCode: string) {
        // this.setCode = "RRB2002JAN211335",
        this.setCode = setCode;
        this.category = "BANKING",
        this.statement = "What is the capital of Nepal ?",
        this.totalChoice = 4,
        this.choice_A = "Deewanapur",
        this.choice_B = "Kathmandu",
        this.choice_C = "Aminagar",
        this.choice_D = "Itanagar",
        this.choice_E = "",
        this.choice_F = "",
        this.problemType = "U",
        this.image = null,
        this.problemId = 251
    }
    
}