import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  itemPro;

  @Output()
  itemChange: EventEmitter<number> = new EventEmitter<number>();

  private counter: number;


  constructor() { }

  ngOnInit() {
    this.counter = this.itemPro;
  }

  onAdd1() {
    this.counter++;
    this.itemChange.emit(this.counter);
  }

}
