import { Questions } from './questions';
import { Question } from './question';
import { Injectable } from '@angular/core';
import { Answer } from './answer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  url={tags:"http://localhost:3000/tags",questions:"http://localhost:3000/questions/"}
  constructor(private http: HttpClient) {
  }

  getQuestions(): any {
    return this.http.get(this.url.questions)
  }

  getQuestion(id: number): any {
    return this.http.get(this.url.questions+id);
  }

  updateQuestion(question: Questions) {
   return this.http.put(this.url.questions+question.id, question)
  }

  deleteQuestion(id:number){
    this.http.delete(this.url.questions+id).subscribe(data=>console.log(data))
  }

  addQuestion(question: Question): any {
    return this.http.post(this.url.questions, question)
  }
  getTags(): any {
    return this.http.get(this.url.tags);
  }
  updateTags(data) {
    this.http.post(this.url.tags, data).subscribe(data => console.log(data))
  }
}
