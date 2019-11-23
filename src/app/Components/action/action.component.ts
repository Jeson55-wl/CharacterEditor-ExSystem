import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Input() itemId: number;
  @Input() rating: number;

  inputName: string;

  constructor() { }

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
}
