import { Character } from './../../Classes/character';
import { SpecialStatDataType } from './../../Classes/specialdatacenter';
import { SpecialEditorComponent } from './../special-editor/special-editor.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CharacterManagerService } from 'src/app/Services/character-manager.service';

@Component({
  selector: 'app-special-sheet',
  templateUrl: './special-sheet.component.html',
  styleUrls: ['./special-sheet.component.css']
})
export class SpecialSheetComponent implements OnInit {

  constructor(public dialog: MatDialog, private _characterServie: CharacterManagerService) { }


  public TechincheCurrecyPoints: number;
  public CapacitaCurrecyPoints: number;
  public PoteriCurrecyPoints: number;

  public PuntiSpesi: number;

  public selectedCharacter: Character;

  ngOnInit() {

    this._characterServie.CharSelectorMessage$.subscribe(message => {
      if(message == 'SelectedIsChanged')
      {
        console.log('characte is changed');
        this.selectedCharacter = this._characterServie.selectedCharacter;
      }
  })


  }

  AddSpecialRank1() {
    const Manifestazione: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Durata: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Tipologia: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Effetto: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    let Intensita: SpecialStatDataType;

    let Puntispesi: number;
    let Rank: number;

    let Name: string;
    let Currency: string;
    let Pool: string;

    let Description: string;

    const editor = this.dialog.open(SpecialEditorComponent, {

      data: {
        manifestazione: Manifestazione,
        durata: Durata,
        tipologia: Tipologia,
        effetto: Effetto,
        intensita: Intensita,

        puntispesi: Puntispesi,
        rank: Rank,
        name: Name,
        currency: Currency,
        pool: Pool,
        description: Description
      }

      });



    editor.afterClosed().subscribe(result => {

        this._characterServie.selectedCharacter.AddSpecialRank1(result.name,
           result.pool,
            result.puntispesi,
            result.currency,
            result.description,
            result.manifestazione,
             result.durata,
             result.tipologia,
            result.effetto, result.intensita );

      });
  }

  AddSpecialRank2() {
    const Manifestazione: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Durata: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Tipologia: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Effetto: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    let Intensita: SpecialStatDataType;

    let Puntispesi: number;
    let Rank: number;

    let Name: string;
    let Currency: string;
    let Pool: string;

    let Description: string;

    const editor = this.dialog.open(SpecialEditorComponent, {

      data: {
        manifestazione: Manifestazione,
        durata: Durata,
        tipologia: Tipologia,
        effetto: Effetto,
        intensita: Intensita,

        puntispesi: Puntispesi,
        rank: Rank,
        name: Name,
        currency: Currency,
        pool: Pool,
        description: Description
      }

      });



    editor.afterClosed().subscribe(result => {

        this._characterServie.selectedCharacter.AddSpecialRank2(result.name,
           result.pool,
            result.puntispesi,
            result.currency,
            result.description,
            result.manifestazione,
             result.durata,
             result.tipologia,
            result.effetto, result.intensita );

      });
  }

  AddSpecialRank3() {
    const Manifestazione: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Durata: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Tipologia: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Effetto: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    let Intensita: SpecialStatDataType;

    let Puntispesi: number;
    let Rank: number;

    let Name: string;
    let Currency: string;
    let Pool: string;

    let Description: string;

    const editor = this.dialog.open(SpecialEditorComponent, {

      data: {
        manifestazione: Manifestazione,
        durata: Durata,
        tipologia: Tipologia,
        effetto: Effetto,
        intensita: Intensita,

        puntispesi: Puntispesi,
        rank: Rank,
        name: Name,
        currency: Currency,
        pool: Pool,
        description: Description
      }

      });



    editor.afterClosed().subscribe(result => {

        this._characterServie.selectedCharacter.AddSpecialRank3(result.name,
           result.pool,
            result.puntispesi,
            result.currency,
            result.description,
            result.manifestazione,
             result.durata,
             result.tipologia,
            result.effetto, result.intensita );

      });
  }

  AddSpecialRank4() {
    const Manifestazione: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Durata: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Tipologia: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Effetto: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    let Intensita: SpecialStatDataType;

    let Puntispesi: number;
    let Rank: number;

    let Name: string;
    let Currency: string;
    let Pool: string;

    let Description: string;

    const editor = this.dialog.open(SpecialEditorComponent, {

      data: {
        manifestazione: Manifestazione,
        durata: Durata,
        tipologia: Tipologia,
        effetto: Effetto,
        intensita: Intensita,

        puntispesi: Puntispesi,
        rank: Rank,
        name: Name,
        currency: Currency,
        pool: Pool,
        description: Description
      }

      });



    editor.afterClosed().subscribe(result => {

        this._characterServie.selectedCharacter.AddSpecialRank4(result.name,
           result.pool,
            result.puntispesi,
            result.currency,
            result.description,
            result.manifestazione,
             result.durata,
             result.tipologia,
            result.effetto, result.intensita );

      });
  }

  AddSpecialRank5() {
    const Manifestazione: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Durata: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Tipologia: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Effetto: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    let Intensita: SpecialStatDataType;

    let Puntispesi: number;
    let Rank: number;

    let Name: string;
    let Currency: string;
    let Pool: string;

    let Description: string;

    const editor = this.dialog.open(SpecialEditorComponent, {

      data: {
        manifestazione: Manifestazione,
        durata: Durata,
        tipologia: Tipologia,
        effetto: Effetto,
        intensita: Intensita,

        puntispesi: Puntispesi,
        rank: Rank,
        name: Name,
        currency: Currency,
        pool: Pool,
        description: Description
      }

      });



    editor.afterClosed().subscribe(result => {

        this._characterServie.selectedCharacter.AddSpecialRank5(result.name,
           result.pool,
            result.puntispesi,
            result.currency,
            result.description,
            result.manifestazione,
             result.durata,
             result.tipologia,
            result.effetto, result.intensita );

      });
  }

  AddSpecialRank6() {
    const Manifestazione: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Durata: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Tipologia: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    const Effetto: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
    let Intensita: SpecialStatDataType;

    let Puntispesi: number;
    let Rank: number;

    let Name: string;
    let Currency: string;
    let Pool: string;

    let Description: string;

    const editor = this.dialog.open(SpecialEditorComponent, {

      data: {
        manifestazione: Manifestazione,
        durata: Durata,
        tipologia: Tipologia,
        effetto: Effetto,
        intensita: Intensita,

        puntispesi: Puntispesi,
        rank: Rank,
        name: Name,
        currency: Currency,
        pool: Pool,
        description: Description
      }

      });



    editor.afterClosed().subscribe(result => {

        this._characterServie.selectedCharacter.AddSpecialRank6(result.name,
           result.pool,
            result.puntispesi,
            result.currency,
            result.description,
            result.manifestazione,
             result.durata,
             result.tipologia,
            result.effetto, result.intensita );

      });
  }




  addTechinchePoint() {
    this._characterServie.selectedCharacter.TechincheCurrecyPoints++;
    this._characterServie.selectedCharacter.spendedCurrencyPoints++;
    this.TechincheCurrecyPoints = this._characterServie.selectedCharacter.TechincheCurrecyPoints;
    this.PuntiSpesi = this._characterServie.selectedCharacter.spendedCurrencyPoints;
  }

  removeTechinchePoint() {
    this._characterServie.selectedCharacter.TechincheCurrecyPoints--;
    this._characterServie.selectedCharacter.spendedCurrencyPoints--;
    this.TechincheCurrecyPoints = this._characterServie.selectedCharacter.TechincheCurrecyPoints;
    this.PuntiSpesi = this._characterServie.selectedCharacter.spendedCurrencyPoints;
  }

  addCapacitaPoint() {
    this._characterServie.selectedCharacter.CapacitaCurrecyPoints++;
    this._characterServie.selectedCharacter.spendedCurrencyPoints++;
    this.CapacitaCurrecyPoints = this._characterServie.selectedCharacter.CapacitaCurrecyPoints;
    this.PuntiSpesi = this._characterServie.selectedCharacter.spendedCurrencyPoints;
  }

  removeCapacitaPoint() {
    this._characterServie.selectedCharacter.CapacitaCurrecyPoints--;
    this._characterServie.selectedCharacter.spendedCurrencyPoints--;
    this.CapacitaCurrecyPoints = this._characterServie.selectedCharacter.CapacitaCurrecyPoints;
    this.PuntiSpesi = this._characterServie.selectedCharacter.spendedCurrencyPoints;
  }

  addPoteriPoint() {
    this._characterServie.selectedCharacter.PoteriCurrencyPoints++;
    this._characterServie.selectedCharacter.spendedCurrencyPoints++;
    this.PoteriCurrecyPoints = this._characterServie.selectedCharacter.PoteriCurrencyPoints;
    this.PuntiSpesi = this._characterServie.selectedCharacter.spendedCurrencyPoints;
  }

  removePoteriPoint() {
    this._characterServie.selectedCharacter.PoteriCurrencyPoints--;
    this._characterServie.selectedCharacter.spendedCurrencyPoints--;
    this.PoteriCurrecyPoints = this._characterServie.selectedCharacter.PoteriCurrencyPoints;
    this.PuntiSpesi = this._characterServie.selectedCharacter.spendedCurrencyPoints;
  }

}
