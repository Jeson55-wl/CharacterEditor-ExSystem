import { Character } from './../Classes/character';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class CharacterManagerService {

  private _CharacterSelectorSource = new Subject<string>();
  CharSelectorMessage$ = this._CharacterSelectorSource.asObservable();


  characters = new Array<Character>();

  selectedCharacter: Character = this.characters[1];

  constructor() {
   }

  getCharacterList()
  {
    return this.characters;
  }

  addCharacter()
  {
    this.characters.push(new Character());
    this.characters[this.characters.length - 1].CharacterID = this.characters.length - 1;
    this.setSelectedCharacter(this.characters[this.characters.length - 1]);
  }

  addSpecificCharacter(character: Character)
  {
    this.characters.push(Object.assign(Character, character));
    this.setSelectedCharacter(this.characters[this.characters.length - 1]);
  }

  getSelectedCharacter()
  {
    return this.selectedCharacter;
  }

  setSelectedCharacter(character: Character)
  {
    this.selectedCharacter = character;
  }


  sendMessage(message: string)
  {
    this._CharacterSelectorSource.next(message);
  }
}
