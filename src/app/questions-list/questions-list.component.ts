import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from './../questions.service';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Questions } from '../questions';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit, OnChanges {
  @Input() sortBy: string;
  @Output() count = new EventEmitter();
  @Output() selected = new EventEmitter();
  questions: Questions[] = new Array();
  displayQuestions: Questions[] = new Array();
  tag: string;
  constructor(private service: QuestionsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.service.getQuestions().subscribe((data: Questions[]) => {
      this.questions = data;
      this.displayQuestions = data;
      this.count.emit(this.questions.length)
      this.sortData(this.sortBy);
      this.tag = this.route.snapshot.paramMap.get('tag')
      if (this.tag)
        this.tagSelected(this.tag)
    });
  }

  ngOnChanges() {
    this.sortData(this.sortBy);
  }

  tagSelected(selectedTag: string) {
    this.displayQuestions = this.displayQuestions.filter(question => this.isSelected(question, selectedTag))
    this.count.emit(this.displayQuestions.length)
    this.selected.emit(selectedTag)
  }

  isSelected(question, selectedTag) {
    if (question.tags.indexOf(selectedTag) >= 0)
      return true
    else
      return false;
  }

  sortData(choice: string) {
    switch (choice) {
      case "alphabetic": return this.displayQuestions?.sort(
        (a, b) => a.title.toLowerCase() > b.title.toLowerCase() ?
          1 :
          a.title.toLowerCase() < b.title.toLowerCase() ?
            -1 : 0);
      case "mostAnswers": return this.displayQuestions?.sort(
        (a, b) => a.answers.length < b.answers.length ?
          1 :
          a.answers.length > b.answers.length ?
            -1 : 0);
      case "newest": return this.displayQuestions?.sort(
        (a, b) => new Date(a.createdDate) > new Date(b.createdDate) ?
          -1 :
          new Date(a.createdDate) < new Date(b.createdDate) ? 1 : 0)
      case "mostVotes": return this.displayQuestions?.sort(
        (a, b) => a.votes < b.votes ?
          1 :
          a.votes > b.votes ?
            -1 : 0);
    }
  }

}
