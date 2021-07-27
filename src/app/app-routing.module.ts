import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {SandhiComponent} from './components/sandhi/sandhi.component';
import {ChapterDetailComponent} from './components/chapter-detail/chapter-detail.component';
import { QuizComponent } from './components/quiz/quiz.component';
const routes: Routes = [
  { path:'user',component:UserComponent},
  { path:'chapter',component:ChapterDetailComponent},
  {path:'',component:SandhiComponent},
  {path:'quiz',component:QuizComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
