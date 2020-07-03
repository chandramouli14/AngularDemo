export class Answer {
    answerId: string;
    votes: number = 0;
    body: string;
    constructor(answerId?: string, body?: string, votes: number = 0) {
        this.answerId = answerId;
        this.votes = votes;
        this.body = body;
    }
}