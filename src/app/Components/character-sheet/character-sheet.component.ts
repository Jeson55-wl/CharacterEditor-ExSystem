import { Character } from './../../Classes/character';
import { CharacterManagerService } from './../../Services/character-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  selectedCharacter: Character;
  public message = "";

  constructor(private _characterServiece: CharacterManagerService) { }
  ngOnInit() {

    this._characterServiece.CharSelectorMessage$.subscribe(message => {
        if(message == 'SelectedIsChanged')
        {
          console.log('characte is changed');
          this.selectedCharacter = this._characterServiece.selectedCharacter;
        }
    })

  }



}
