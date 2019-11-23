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

  onChangeRapiridta(rate: number)
  {
    this.selectedCharacter.Rapidita = rate;
    this.UpdateDisfesaFisica();
    this.UpdateAzioni();
  }

  onChangeResistenza(rate: number)
  {
    this.selectedCharacter.Resistenza = rate;
    this.UpdateDisfesaFisica();
    this.UpdateSalute();

  }

  onChangeSaggezza(rate: number)
  {
    this.selectedCharacter.Saggezza = rate;
    this.UpdateDifMentale();
    this.UpdateSanita();


  }

  onChangeRagione(rate: number)
  {
    this.selectedCharacter.Ragione = rate;
    this.UpdateDifMentale();

  }


  //UpdateSecondaryStats
  UpdateDisfesaFisica()
  {
    this.selectedCharacter.ResistenzaFisica = this.selectedCharacter.Rapidita +  this.selectedCharacter.Resistenza + 6;
  }

  UpdateSalute()
  {
    this.selectedCharacter.Salute = this.selectedCharacter.Resistenza + 6;
  }

  UpdateDifMentale()
  {
    this.selectedCharacter.ResistenzaMentale = this.selectedCharacter.Saggezza + this.selectedCharacter.Ragione + 6;
  }

  UpdateSanita()
  {
    this.selectedCharacter.Sanita = this.selectedCharacter.Saggezza + 6;
  }

  UpdateAzioni()
  {
    this.selectedCharacter.AzioniMaggior = Math.ceil(this.selectedCharacter.Rapidita / 2.0);
    this.selectedCharacter.AzioniMinori = Math.floor(this.selectedCharacter.Rapidita / 2.0);
    console.log("CurrentSlelectedValue: " + this.selectedCharacter.AzioniMaggior);
    console.log("CurrentSlelectedValue: " + this.selectedCharacter.AzioniMinori);
  }



}
