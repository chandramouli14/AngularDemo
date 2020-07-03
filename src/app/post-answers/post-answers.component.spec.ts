import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnswersComponent } from './post-answers.component';

describe('PostAnswersComponent', () => {
  let component: PostAnswersComponent;
  let fixture: ComponentFixture<PostAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
