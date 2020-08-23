import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-six',
  templateUrl: './child-six.component.html',
  styleUrls: ['./child-six.component.css']
})
export class ChildSixComponent implements OnInit {
  message: string;
  newMessage: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  changeMassage(): void{
    this.data.changeMessage(this.newMessage);
  }

}
