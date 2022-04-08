import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() proprty_names:IProperty
  constructor()
  {

   }

  ngOnInit(): void {
  }


}
