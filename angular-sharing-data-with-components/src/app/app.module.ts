import { ChildThreeComponent } from './component/child-three/child-three.component';
import { ChildOneComponent } from './component/child-one/child-one.component';
import { MainRouteModule } from './routes/main-route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParentComponent } from './page/parent/parent.component';
import { ChildTwoComponent } from './component/child-two/child-two.component';
import { ChildFourComponent } from './component/child-four/child-four.component';
import { ChildFiveComponent } from './component/child-five/child-five.component';
import { ChildSixComponent } from './component/child-six/child-six.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ChildFourComponent,
    ChildFiveComponent,
    ChildSixComponent
  ],
  imports: [
    BrowserModule,
    MainRouteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
