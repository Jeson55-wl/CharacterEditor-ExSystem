import { CharacterManagerService } from './../../Services/character-manager.service';
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
  @Input() specialIndex: number;
  @Input() rank: number;


  constructor(private _characterServiece: CharacterManagerService) { }

  ngOnInit() {


  }

  Remove()
  {
    if(this.rank == 1)
    {
      this._characterServiece.getSelectedCharacter().RemoveSpecialRank1(this.specialIndex);
    }

    if(this.rank == 2)
    {
      this._characterServiece.getSelectedCharacter().RemoveSpecialRank2(this.specialIndex);
    }

    if(this.rank == 3)
    {
      this._characterServiece.getSelectedCharacter().RemoveSpecialRank3(this.specialIndex);
    }

    if(this.rank == 4)
    {
      this._characterServiece.getSelectedCharacter().RemoveSpecialRank4(this.specialIndex);
    }

    if(this.rank == 5)
    {
      this._characterServiece.getSelectedCharacter().RemoveSpecialRank5(this.specialIndex);
    }

    if(this.rank == 6)
    {
      this._characterServiece.getSelectedCharacter().RemoveSpecialRank6(this.specialIndex);
    }
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
