import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyAnswerComponent } from './reply-answer.component';

describe('ReplyAnswerComponent', () => {
  let component: ReplyAnswerComponent;
  let fixture: ComponentFixture<ReplyAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
