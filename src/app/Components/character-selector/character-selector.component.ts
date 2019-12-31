import { ElectronService } from 'ngx-electron';
import { CharacterManagerService } from './../../Services/character-manager.service';
import { Character } from './../../Classes/character';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-character-selector',
  templateUrl: './character-selector.component.html',
  styleUrls: ['./character-selector.component.css']
})
export class CharacterSelectorComponent implements OnInit {

  constructor(private _characterServiece: CharacterManagerService, private _electronService: ElectronService,
    protected sanitizer: DomSanitizer,
    private cdRef: ChangeDetectorRef) {

   }

  public characters = [];

  slectedCharacter: Character;
  ngOnInit() {
    this.characters = this._characterServiece.getCharacterList();
    this._electronService.ipcRenderer.on('load-image', (_event, arg) => {
      this.cdRef.detectChanges();
    });
  }

  Update()
  {
    this.cdRef.detectChanges();
  }

  getImage(char: Character) {
    return this.sanitizer.bypassSecurityTrustUrl(char.image);
  }

  onSelect(character: Character): void {
    console.log(this._characterServiece.getSelectedCharacter().Ability);
    this.slectedCharacter = character;
    this._characterServiece.setSelectedCharacter(character);
    this._characterServiece.sendMessage('SelectedIsChanged');
  }
}
