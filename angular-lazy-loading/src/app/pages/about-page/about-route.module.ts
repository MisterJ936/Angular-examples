import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AboutRouteModule { }
