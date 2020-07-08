import  * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic';
import { Reply } from './../reply';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reply-answer',
  templateUrl: './reply-answer.component.html',
  styleUrls: ['./reply-answer.component.css']
})
export class ReplyAnswerComponent implements OnInit {

  @Output() reply=new EventEmitter<Reply>();
  @Output() cancel=new EventEmitter();
  Editor=ClassicEditor 
  model={
    editorData:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  getId(){
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  saveReply(){
    let reply=new Reply(this.getId(),this.model.editorData)
    this.model.editorData=""
    this.reply.emit(reply)
  }
  cancelReply(){
    this.cancel.emit(null)
  }

}
