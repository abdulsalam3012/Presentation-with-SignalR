import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentMessageComponent } from './AudieceMessage/sent-message/sent-message.component';
import { JoinGroupComponent } from './AudieceMessage/join-group/join-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SentMessageComponent,
    JoinGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
