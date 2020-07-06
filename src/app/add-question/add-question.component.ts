import { Router, ActivatedRoute } from '@angular/router';
import { QuestionsService } from './../questions.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Component, OnInit } from '@angular/core';
import { Question } from '../question';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  public title: string = '';
  public data: string;
  public tag: string;
  public question: any;
  id: number;
  userSelects = [];
  showOptions: any;
  suggestions = [];
  tags: any;
  show: boolean = false;
  public model = {
    editorData: ""
  };
  constructor(private service: QuestionsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getTags().subscribe(data => {
      this.tags = data
      this.suggestions = data.tags
      console.log(this.suggestions)
    })
    this.id = +this.route.snapshot.paramMap.get('id');
    this.service.getQuestion(this.id).subscribe(data => {
      this.model.editorData = data.body;
      this.question = data;
      this.title = data.title;
      this.userSelects = data.tags;
    })
  }

  submit() {
    console.log(this.title + "   " + "     " + this.model.editorData);
    if (this.id) {
      this.question.tags = this.userSelects;
      this.question.title = this.title;
      this.question.body = this.model.editorData;
      this.service.updateQuestion(this.question);
      alert("Your question updated sucessfully")
      this.router.navigate([`home/question/${this.id}`])
    }
    else {
      this.question = new Question(this.title, this.model.editorData, this.userSelects)
      this.service.addQuestion(this.question).subscribe(data => {
        alert("Your Question added Successfully");
       this.cancel()
      })
    }
    this.service.updateTags(this.tags)
  }
  cancel() {
    if (this.id) {
      this.router.navigate([`home/question/${this.id}`])
    }
    else {
      this.model.editorData = this.title = this.tag = '';
      this.userSelects = []
      this.router.navigate(["/home"])
    }
  }

  showSuggestion() {
    if (this.tag.trim().length > 0) {
      let reg = new RegExp(this.tag.trim().toLowerCase())
      this.showOptions = this.suggestions.filter(obj => reg.test(obj.toLowerCase()))
      if (this.showOptions.length > 0) {
        this.show = true
      }
    }
    else {
      this.show = false;
      this.showOptions = []
    }
  }
  addNewTag() {
    this.userSelects.push(this.tag.trim());
    this.tags.tags.push(this.tag.trim())
    this.tag = " "
  }

  selectSuggestion(s) {
    this.userSelects.push(s);
    this.suggestions = this.suggestions.filter(tag => tag !== s)
    this.show = false
    this.tag = " "
  }

  deleteSelects(s) {
    this.userSelects = this.userSelects.filter(item => item !== s);
    this.suggestions.push(s)
  }

  isDisable(): boolean {
    console.log(this.model.editorData.length == 0 && this.title.length == 0 && this.userSelects.length == 0);
    return (this.model.editorData.length == 0 || this.title.length == 0 || this.userSelects.length == 0);
  }
}
