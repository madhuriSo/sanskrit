import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandhiComponent } from './components/sandhi/sandhi.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ChapterDetailComponent } from './components/chapter-detail/chapter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SandhiComponent,
    UserComponent,
    ChapterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
