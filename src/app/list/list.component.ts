import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listPro = 3;
  counter: number = this.listPro;

  constructor() { }

  ngOnInit() {
  }

  listChange(counter: number) {
    this.counter = counter;
  }

}
