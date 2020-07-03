import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionsService } from './../questions.service';
import { Question } from './../question';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from '../questions';

@Component({
  selector: 'app-questions-view',
  templateUrl: './questions-view.component.html',
  styleUrls: ['./questions-view.component.css']
})

export class QuestionsViewComponent implements OnInit {
  question: Questions = new Questions();
  notFound: boolean = false;
  public Editor = ClassicEditor;
  data: string;
  isClicked = false
  updateQuestion = new Question();
  constructor(private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private router: Router) { }
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.questionsService.getQuestion(id).subscribe((data: Questions) => {
      this.question = data;
      this.question.answers.sort((a, b) => a.votes < b.votes ? 1 : a.votes > b.votes ? -1 : 0)
    },
      err => this.notFound = true)
  }
  increaseVotes() {
    this.question.votes++;
    this.updateData()
  }
  decreaseVotes() {
    this.question.votes--;
    this.updateData()
  }
  increaseAnswerVotes(id: string) {
    this.question.answers.find(answer => answer.answerId == id).votes++;
    this.updateData();
    this.isClicked = true;
  }
  decreaseAnswerVotes(id: string) {
    this.question.answers.find(answer => answer.answerId == id).votes--;
    this.updateData();
  }
  saveAnswer(event: any) {
    this.question.answers.push(event);
    this.updateData()
  }
  updateData() {
    this.questionsService.updateQuestion(this.question);
  }
}
