import { SpecialStatDataType } from 'src/app/Classes/specialdatacenter';
import { Special } from './../../Classes/special';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  @Input() special: Special;


  constructor() { }

  ngOnInit() {


  }

  checkStat(value: SpecialStatDataType)
  {
    if(value)
    {
        return value;
    }


    return 0;
  }

}
