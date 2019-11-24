import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Abilityspec } from 'src/app/Classes/abilityspec';

@Component({
  selector: 'app-specialization-adder',
  templateUrl: './specialization-adder.component.html',
  styleUrls: ['./specialization-adder.component.css']
})
export class SpecializationAdderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SpecializationAdderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  onAdd()
  {
    this.dialogRef.close(this.data);
  }

}
