import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPresentationComponent } from './Presentation/view-presentation/view-presentation.component';
import { CreatePresentationComponent } from './Presentation/create-presentation/create-presentation.component';

const routes: Routes = [
  {
    path:'viewpresentation',
    component:ViewPresentationComponent
  },
  {
    path:'CreatePresentation',
    component:CreatePresentationComponent
  },
  {
    path:'',
    redirectTo:'CreatePresentation',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
