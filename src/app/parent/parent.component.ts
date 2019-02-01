import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentInitCount = 0;
  showCount = this.showCount;

  constructor() { }

  ngOnInit() {
  }

  parentCatchChange(catchCount: number) {
    this.showCount = catchCount;
  }

}
