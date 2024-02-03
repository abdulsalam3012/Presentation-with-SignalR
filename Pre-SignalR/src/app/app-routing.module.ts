import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPresentationComponent } from './Presentation/view-presentation/view-presentation.component';

const routes: Routes = [
  {
    path:'viewpresentation',
    component:ViewPresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
