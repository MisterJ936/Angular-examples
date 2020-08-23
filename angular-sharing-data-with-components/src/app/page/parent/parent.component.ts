import { ChildThreeComponent } from './../../component/child-three/child-three.component';
import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildThreeComponent) child;

  messageFromChild2 = '';
  messageFromChild3 = '';

  constructor() { }

  ngOnInit(): void {
  }

  recievedMessage($event): void {
    this.messageFromChild2 = $event;
    this.messageFromChild3 = this.child.message;
  }

}
