import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { SpecialDataCenter, SpecialStatDataType } from 'src/app/Classes/specialdatacenter';

@Component({
  selector: 'app-special-editor',
  templateUrl: './special-editor.component.html',
  styleUrls: ['./special-editor.component.css']
})


export class SpecialEditorComponent implements OnInit {

  specialdatacenter: SpecialDataCenter = new SpecialDataCenter();

  selectedManifestazione: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
  selectedDurata: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
  selectedTipologia: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
  selectedEffetto: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(6);
  selectedIntensita: SpecialStatDataType;

  puntispesi: number;
  rank: number;

  name: string;
  currency: string;
  pool: string;

  description: string;




  constructor(public dialogRef: MatDialogRef<SpecialEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  OnUpdateStats()
  {
    let x: number = 0;

    console.log(this.selectedManifestazione)

    for(let i = 0; i < 6; i++)
    {

      x += this.AddIfExist(this.selectedManifestazione[i]);
      x += this.AddIfExist(this.selectedDurata[i]);
      x += this.AddIfExist(this.selectedTipologia[i]);
      x += this.AddIfExist(this.selectedEffetto[i]);
    }
    x += this.AddIfExist(this.selectedIntensita);
    this.puntispesi = x;
    this.rank = Math.ceil(x / 2);
  }

  private AddIfExist(value: SpecialStatDataType)
  {
    if(value)
    {
        return value.pointCost;
    }
    return 0;
  }

  onAdd()
  {
    this.data.manifestazione = this.selectedManifestazione;
    this.data.durata = this.selectedDurata;
    this.data.tipologia = this.selectedTipologia;
    this.data.effetto = this.selectedEffetto;
    this.data.intensita = this.selectedIntensita;

    this.data.puntispesi = this.puntispesi;
    this.data.rank = this.rank;

    this.data.name = this.name;
    this.data.currency = this.currency;
    this.data.pool = this.pool;

    this.data.description = this.description;




    this.dialogRef.close(this.data);
  }


}
