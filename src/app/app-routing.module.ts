import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TagsComponent } from './tags/tags.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAnswerComponent } from './edit-answer/edit-answer.component';


const routes: Routes = [
  { path: "home", component: HomeComponent},
  {path:"addQuestion",component:AddQuestionComponent},
  {path:"home/addQuestion",component:AddQuestionComponent},
  {path:"home/:tag",component:HomeComponent},
  {path:"home/addQuestion/:id",component:AddQuestionComponent},
  {path:"home/question/:id",component:QuestionsViewComponent},
  {path:"home/questionView",component:QuestionsViewComponent},
  // { path: "tags", component: TagsComponent },
  {path:"editAnswer",component:EditAnswerComponent},
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
