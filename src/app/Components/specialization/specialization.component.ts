import { CharacterManagerService } from './../../Services/character-manager.service';
import { MatDialog } from '@angular/material/dialog';
import { Abilityspec } from 'src/app/Classes/abilityspec';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent implements OnInit {

  @Input() specializationIndex: number;
  @Input() abilityIndexs: number;

  specialization: Abilityspec;

  constructor(public dialog: MatDialog,private _characterServiece: CharacterManagerService) { }

  ngOnInit() {
    this.specialization = this._characterServiece.getSelectedCharacter().Ability[this.abilityIndexs].specials[this.specializationIndex];
  }

  Remove()
  {
    this._characterServiece.getSelectedCharacter().Ability[this.abilityIndexs].RemoveSpecia(this.specializationIndex);
  }

}
