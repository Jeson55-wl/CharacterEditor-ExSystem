import { Abilityspec } from 'src/app/Classes/abilityspec';
import { Character } from './../Classes/character';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class CharacterManagerService {

  private _CharacterSelectorSource = new Subject<string>();
  CharSelectorMessage$ = this._CharacterSelectorSource.asObservable();

  characterIndex: number = 0;

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
    this.characters[this.characters.length - 1].CharacterID = this.characterIndex + 1;
    this.characterIndex += this.characters[this.characters.length - 1].CharacterID;
    this.characters[this.characters.length - 1].CharacterIndex = this.characters.length - 1;
    this.setSelectedCharacter(this.characters[this.characters.length - 1]);
  }

  addSpecificCharacter(character: Character)
  {
    character.CharacterIndex = this.characters.length;
    this.characters.push(Object.setPrototypeOf(character, new Character()));

    this.characterIndex += character.CharacterID;

    for(let i = 0; i < character.Ability.length; i++)
    {
      let x =character.Ability[i];
      this.characters[this.characters.length - 1].Ability[i] = Object.setPrototypeOf(character.Ability[i], new Abilityspec(x.Rank,x.Name,x.Mastery));
    }

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


  RemoveCharacter(index: number)
  {
    this.selectedCharacter = null;
    this.characters.splice(index, 1);
    this.sendMessage('SelectedIsChanged');
  }

  sendMessage(message: string)
  {
    this._CharacterSelectorSource.next(message);
  }
}
