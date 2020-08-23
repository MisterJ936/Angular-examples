import { NotfoundPageComponent } from './../pages/notfound-page/notfound-page.component';
import { AboutPageComponent } from './../pages/about-page/about-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./../pages/home-page/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./../pages/contact-page/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./../pages/about-page/about.module').then(mod => mod.AboutModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class MainRouterModule { }
