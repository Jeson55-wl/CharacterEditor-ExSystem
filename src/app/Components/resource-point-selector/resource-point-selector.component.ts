import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resource-point-selector',
  templateUrl: './resource-point-selector.component.html',
  styleUrls: ['./resource-point-selector.component.css']
})
export class ResourcePointSelectorComponent implements OnInit {

  @Input() itemId: number;
  @Input() rating: number;
  @Output() public childEvent = new EventEmitter();

  inputName: string;


  constructor() { }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  onClick(number: number)
  {
    this.rating = number;
    this.childEvent.next(number);
  }

}
