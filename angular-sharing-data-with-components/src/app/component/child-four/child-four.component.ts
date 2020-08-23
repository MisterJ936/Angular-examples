import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit {

  message: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
