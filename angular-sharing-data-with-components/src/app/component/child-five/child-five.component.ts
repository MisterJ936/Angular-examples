import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-five',
  templateUrl: './child-five.component.html',
  styleUrls: ['./child-five.component.css']
})
export class ChildFiveComponent implements OnInit {

  message: string;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
