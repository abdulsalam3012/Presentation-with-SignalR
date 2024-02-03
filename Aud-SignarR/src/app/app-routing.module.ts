import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinGroupComponent } from './AudieceMessage/join-group/join-group.component';
import { SentMessageComponent } from './AudieceMessage/sent-message/sent-message.component';

const routes: Routes = [
  {
    path:'joinGroup',
    component:JoinGroupComponent
  },
  {
    path:'sentMessage',
    component:SentMessageComponent
  },
  {
    path:'',
    redirectTo:'joinGroup',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
