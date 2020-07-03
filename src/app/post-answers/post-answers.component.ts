import { Answer } from './../answer';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-post-answers',
  templateUrl: './post-answers.component.html',
  styleUrls: ['./post-answers.component.css']
})
export class PostAnswersComponent implements OnInit {
  Editor = ClassicEditor;
  @Output() answer = new EventEmitter<Answer>();

  public model = {
    editorData: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  saveAnswer(): any {
    let submitAnswer = new Answer(this.generateId(), this.model.editorData);
    this.model.editorData=""
    this.answer.emit(submitAnswer)
  }
  
}
