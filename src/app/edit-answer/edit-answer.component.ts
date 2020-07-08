import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from './../questions.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.css']
})
export class EditAnswerComponent implements OnInit {
  Editor = ClassicEditor;
  answerId: string;
  question: Questions;
  id: number;
  data:string
  public model = {
    editorData: ''
  };
  constructor(private router:Router,private service: QuestionsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.answerId = this.route.snapshot.paramMap.get("answerId");
    this.id = +this.route.snapshot.paramMap.get("id")
    this.service.getQuestion(this.id).subscribe(data => {
      this.question = data;
      this.model.editorData = this.data= data.answers.find(answer => this.answerId == answer.answerId).body
    })
  }

  saveAnswer() {
    this.question.answers.find(answer => this.answerId == answer.answerId).body = this.model.editorData
    this.service.updateQuestion(this.question).subscribe(data=>console.log(data))
    alert("Your Answer is Sucessfully Updated")
    this.router.navigate([`home/question/${this.id}`])
  }
  cancel(){
    let title=this.model.editorData==this.data?"Do you want to leave":"Do you want to leave your changes"
    let decision=confirm(title)
    if(decision){
      this.router.navigate([`home/question/${this.id}`])
    }
  }
}
