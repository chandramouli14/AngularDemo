import { Reply } from './reply';
export class Answer {
    answerId: string;
    votes: number = 0;
    body: string;
    replies:Reply[]
    constructor(answerId?: string, body?: string, votes: number = 0,replies:Reply[]=[]) {
        this.answerId = answerId;
        this.votes = votes;
        this.body = body;
        this.replies=replies;
    }
}