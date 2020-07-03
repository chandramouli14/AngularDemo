
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ObjkeysPipe } from './objkeys.pipe';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { PostAnswersComponent } from './post-answers/post-answers.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { EditAnswerComponent } from './edit-answer/edit-answer.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    TagsComponent,
    NotfoundComponent,
    ObjkeysPipe,
    QuestionsListComponent,
    AddQuestionComponent,
    QuestionsViewComponent,
    PostAnswersComponent,
    EditAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
