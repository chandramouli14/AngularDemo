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
  isClicked = false;
  replyId: string;
  editReplyId: string;
  updateQuestion = new Question();
  replyData:string;
  model = {
    editorData: ""
  }

  constructor(private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private router: Router) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.questionsService.getQuestion(id).subscribe((data: Questions) => {
      this.question = data;
      this.question.answers.sort((a, b) => a.votes < b.votes ? 1 : a.votes > b.votes ? -1 : 0)
    },
      err => this.notFound = true)
  }


  deleteQuestion(id: number) {
    let decision = confirm("Do you want Delete the selected question");
    if (decision) {
      this.questionsService.deleteQuestion(id);
      this.router.navigate(["/home"])
    }
  }

  deleteAnswer(id: string) {
    let decision = confirm("Do you want to delete the selected answer");
    let index = 0;
    if (decision) {
      this.question.answers.forEach(answer => {
        if (answer.answerId != id)
          index++
      });
      this.question.answers.splice(index, 1);
      this.updateData();
    }
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
  }

  decreaseAnswerVotes(id: string) {
    this.question.answers.find(answer => answer.answerId == id).votes--;
    this.updateData();
  }

  saveAnswer(event: any) {
    this.question.answers.push(event);
    this.updateData()
  }

  replyAnswer(answerId: string) {
    this.replyId = answerId
  }

  cancelReply(data) {
    this.replyId = data
  }

  saveReply(reply: any) {
    this.question.answers.find(answer => answer.answerId == this.replyId).replies.push(reply)
    this.replyId = null;
    this.updateData();
  }

  cancelEdit() {
    let message=this.replyData==this.model.editorData?"Do you want to cancel":"Do you want to leave your changes ?"
    let decision = confirm(message)
    if (decision) {
      this.editReplyId = null
      this.model.editorData = ""
    }
  }
  
  deleteReply(answerId: string, replyId: string) {
    let index = 0;
    let decision = confirm("Do you want to delete the selected reply")
    if (decision) {
      this.question.answers.find(answer => answer.answerId == answerId).replies.forEach(reply => { if (reply.id != replyId) index++ })
      this.question.answers.find(answer => answer.answerId == answerId).replies.splice(index, 1);
      this.updateData();
    }
  }
  editReply(answerId: string, replyId: string) {
    this.editReplyId = replyId;
    this.model.editorData = this.replyData =this.question.answers.find(answer => answer.answerId == answerId).replies.find(reply => reply.id == this.editReplyId).body;
  }

  updateReply(answerId: string, replyId: string) {
    this.question.answers.find(answer => answer.answerId == answerId).replies.find(reply => reply.id == replyId).body = this.model.editorData
    this.updateData()
    this.editReplyId = null;
    this.model.editorData = ''
  }

  updateData() {
    this.questionsService.updateQuestion(this.question).subscribe(data => console.log(data));
  }
}
