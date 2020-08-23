import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: ContactPageComponent
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactRouteModule { }
