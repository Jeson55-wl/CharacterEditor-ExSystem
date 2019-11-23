import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stat-point-selector',
  templateUrl: './stat-point-selector.component.html',
  styleUrls: ['./stat-point-selector.component.css']
})
export class StatPointSelectorComponent implements OnInit {
  @Input() itemId: number;
  @Input() rating: number;
  @Output() public childEvent = new EventEmitter();

  inputName: string;

  constructor() { }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
    //this.rating = 0;
  }

  onClick(number: number)
  {
    this.rating = number;
    this.childEvent.next(number);
  }


}
