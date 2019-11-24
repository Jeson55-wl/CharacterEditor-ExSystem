import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ability-adder',
  templateUrl: './ability-adder.component.html',
  styleUrls: ['./ability-adder.component.css']
})
export class AbilityAdderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AbilityAdderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  onAdd()
  {
    this.dialogRef.close(this.data);
  }


}
