import { MainRouterModule } from './routes/main-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
