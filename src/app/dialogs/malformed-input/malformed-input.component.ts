import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-malformed-input',
  templateUrl: './malformed-input.component.html',
  styleUrls: ['./malformed-input.component.scss']
})
export class MalformedInputComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
