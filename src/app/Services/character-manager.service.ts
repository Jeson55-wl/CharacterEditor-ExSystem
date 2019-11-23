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

  char: Character = {
      image: "default",
      Race: "none",
      Sex: "none",
      Origin: "none",
      Age: 0,

      Archetype: "none",
      Affigliation: "none",
      Rank: "none",
      XP: 0,

      CharacterName: "none",
      Description: "none",

      Coordinazione: 0,
      Potenza: 0,
      Rapidita: 0,
      Resistenza: 0,
      Precezione: 0,
      Intuito: 0,
      Ragione: 0,
      Saggezza: 0,

      Possedimenti: 0,
      Alleati: 0,
      Potere: 0,
      Reputazione: 0,

      ResistenzaFisica: 0,
      ResistenzaMentale: 0,
      Salute: 0,
      Sanita: 0,
      AzioniMaggior: 0,
      AzioniMinori: 0,




  };

  selectedCharacter: Character = this.characters[1];

  constructor() {
   }

  getCharacterList()
  {
    return this.characters;
  }

  addCharacter()
  {
    this.char.CharacterName = "Character" + this.characters.length;
    this.characters.push(new Character());
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
