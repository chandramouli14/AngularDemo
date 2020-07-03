import { Answer } from './answer';
export class Question {
    title: string;
    body: string;
    tags: string[] = [];
    votes: number = 0;
    answers: Answer[] = [];
    createdDate: Date = new Date();
    constructor(
        title?: string,
        body?: string,
        tags: string[] = [],
        votes: number = 0,
        answers: Answer[] = [],
        createdDate: Date = new Date()) {
        this.title = title;
        this.body = body;
        this.tags = tags;
        this.votes = votes;
        this.answers = answers;
        this.createdDate = createdDate
    }
}