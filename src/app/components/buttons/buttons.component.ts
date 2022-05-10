import { Component, Input, OnInit } from '@angular/core';
import { inherits } from 'util';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
@Input() text: string;
  constructor() { }
  
  ngOnInit(): void {
  }

}
