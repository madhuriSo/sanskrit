import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandhiComponent } from './components/sandhi/sandhi.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ChapterDetailComponent } from './components/chapter-detail/chapter-detail.component';
import { AnimaComponent } from './components/anima/anima.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizComponent } from './components/quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    SandhiComponent,
    UserComponent,
    ChapterDetailComponent,
    AnimaComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
