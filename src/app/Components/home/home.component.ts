import { Character } from './../../Classes/character';
import { CharacterManagerService } from './../../Services/character-manager.service';
import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _characterServie: CharacterManagerService, private _electronService: ElectronService) { }

  ngOnInit() {

    this._electronService.ipcRenderer.send('load-characters');
    this._electronService.ipcRenderer.on('load-characters', (event, arg)=>{
        for(let i = 0; i < arg.length; i++)
        {
          this._characterServie.addSpecificCharacter(arg[i]);
        }
    });


  }

  onClickAddButton()
  {
    this._characterServie.addCharacter();
    this.SaveCurrentCharacter();
  }

  SaveCurrentCharacter()
  {
    this._electronService.ipcRenderer.send('save-current-character', this._characterServie.getSelectedCharacter());
  }

}
