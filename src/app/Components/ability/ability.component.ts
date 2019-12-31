import { CharacterManagerService } from './../../Services/character-manager.service';
import { SpecializationAdderComponent } from './../specialization-adder/specialization-adder.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';
import { Abilityspec } from 'src/app/Classes/abilityspec';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  constructor(public dialog: MatDialog,private _characterServiece: CharacterManagerService) { }

  @Input() public abilityIndex: number;

  Ability: Abilityspec;

  public indef: number;

  ngOnInit() {
    this.Ability = this._characterServiece.getSelectedCharacter().Ability[this.abilityIndex];
  }

  Remove()
  {
    this._characterServiece.getSelectedCharacter().RemoveAbility(this.abilityIndex);
  }

  AddSpecialization()
  {
    let Name: string;
    let Rank: number;
    let Mastery: number;


    let editor = this.dialog.open(SpecializationAdderComponent, {

      data: {name: Name, rank: Rank, mastery: Mastery}

      });

    editor.afterClosed().subscribe(result => {
        Name = result.name;
        Rank = result.rank;
        Mastery = result.mastery;
        this._characterServiece.getSelectedCharacter().Ability[this.abilityIndex].AddSpecial(Rank, Name, Mastery);
      });




  }

}
