import { CharacterManagerService } from './../../Services/character-manager.service';
import { Character } from './../../Classes/character';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-character-selector',
  templateUrl: './character-selector.component.html',
  styleUrls: ['./character-selector.component.css']
})
export class CharacterSelectorComponent implements OnInit {

  constructor(private _characterServiece: CharacterManagerService) { }

  public characters = [];

  slectedCharacter: Character;
  ngOnInit() {
    this.characters = this._characterServiece.getCharacterList();
  }


  onSelect(character: Character): void {
    console.log(character.Coordinazione);
    this.slectedCharacter = character;
    this._characterServiece.setSelectedCharacter(character);
    this._characterServiece.sendMessage('SelectedIsChanged');
  }
}
