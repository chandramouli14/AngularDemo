import { Answer } from './answer';
export class Questions {
    id: number;
    title: string;
    body: string;
    tags: string[] = [];
    votes: number = 0;
    answers: Answer[] = [];
    createdDate: Date = new Date();
    constructor(
        id?: number,
        title?: string,
        body?: string,
        tags?: string[],
        votes?: number,
        answers?: Answer[],
        createdDate?: Date) {
        this.id = id
        this.title = title;
        this.body = body;
        this.tags = tags;
        this.votes = votes;
        this.answers = answers;
        this.createdDate = createdDate
    }
}