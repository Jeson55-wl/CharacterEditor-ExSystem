import { ElectronService } from 'ngx-electron';
import { Character } from './../../Classes/character';
import { CharacterManagerService } from './../../Services/character-manager.service';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbilityAdderComponent } from '../ability-adder/ability-adder.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {


  selectedCharacter: Character;
  myDate = new Date();


  public message = '';

  constructor(private _characterServiece: CharacterManagerService,
              public dialog: MatDialog, private _electronService: ElectronService,
              protected sanitizer: DomSanitizer,
              private cdRef: ChangeDetectorRef) { }
  ngOnInit() {

    this._characterServiece.CharSelectorMessage$.subscribe(message => {
        if (message == 'SelectedIsChanged') {
          console.log('characte is changed');
          this.selectedCharacter = this._characterServiece.selectedCharacter;
        }
      });

    this._electronService.ipcRenderer.on('load-image', (_event, arg) => {
        this.myDate = new Date(this.myDate.setDate(this.myDate.getDate() + 1));
        this._characterServiece.getSelectedCharacter().image = arg + "?" + this.myDate;
        this.cdRef.detectChanges();
      });


  }

  getImage() {
    return this.sanitizer.bypassSecurityTrustUrl(this._characterServiece.getSelectedCharacter().image);
  }

  onChangeRapiridta(rate: number) {
    this.selectedCharacter.Rapidita = rate;
    this.UpdateDisfesaFisica();
    this.UpdateAzioni();
  }

  onChangeResistenza(rate: number) {
    this.selectedCharacter.Resistenza = rate;
    this.UpdateDisfesaFisica();
    this.UpdateSalute();

  }

  onChangeSaggezza(rate: number) {
    this.selectedCharacter.Saggezza = rate;
    this.UpdateDifMentale();
    this.UpdateSanita();


  }

  onSelectImage() {
    this._electronService.ipcRenderer.send('load-image', this._characterServiece.getSelectedCharacter());
  }

  onChangeRagione(rate: number) {
    this.selectedCharacter.Ragione = rate;
    this.UpdateDifMentale();

  }

  AddAbility() {
    let Name: string;
    let Rank: number;
    let Mastery: number;

    const editor = this.dialog.open(AbilityAdderComponent, {

      data: {name: Name, rank: Rank, mastery: Mastery}

      });

    editor.afterClosed().subscribe(result => {
      if (result) {
        Name = result.name;
        Rank = result.rank;
        Mastery = result.mastery;
        this._characterServiece.getSelectedCharacter().AddAbility(Name, Rank, Mastery);
        }
      });
  }


  // UpdateSecondaryStats
  UpdateDisfesaFisica() {
    this.selectedCharacter.ResistenzaFisica = this.selectedCharacter.Rapidita +  this.selectedCharacter.Resistenza + 6;
  }

  UpdateSalute() {
    this.selectedCharacter.Salute = this.selectedCharacter.Resistenza + 6;
  }

  UpdateDifMentale() {
    this.selectedCharacter.ResistenzaMentale = this.selectedCharacter.Saggezza + this.selectedCharacter.Ragione + 6;
  }

  UpdateSanita() {
    this.selectedCharacter.Sanita = this.selectedCharacter.Saggezza + 6;
  }

  UpdateAzioni() {
    this.selectedCharacter.AzioniMaggior = Math.ceil(this.selectedCharacter.Rapidita / 2.0);
    this.selectedCharacter.AzioniMinori = Math.floor(this.selectedCharacter.Rapidita / 2.0);

  }



}
