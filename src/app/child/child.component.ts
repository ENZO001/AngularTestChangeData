import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // ============= 資料攔截加工 =============
  // _childCatchCount: number;
  // @Input()
  // set childCatchCount(childCatchCount: number) {
  //   this._childCatchCount = childCatchCount + 1000;
  // }
  // get childCatchCount() : number {
  //   return this._childCatchCount;
  // }
  // =======================================

  // ============= 一般取得資料 =============
  @Input()
  childCatchCount;
  // =======================================

  @Output()
  childAdd = new EventEmitter<number>();

  private tempCount: number;

  constructor() { }

  ngOnInit() {
    this.tempCount = this.childCatchCount;
  }

  add() {
    this.tempCount++;
    this.childAdd.emit(this.tempCount);
  }
}
