import { Component, OnInit } from '@angular/core';
import { HousingServicesService } from 'src/app/Services/HousingServices.service';
import { IProperty } from '../IProperty';
@Component({
  selector: 'app-propert-list',
  templateUrl: './propert-list.component.html',
  styleUrls: ['./propert-list.component.css']
})
export class PropertListComponent implements OnInit {

  constructor(private housingsvc:HousingServicesService) {
    this.Propertieslist=[];
  }
  Propertieslist:Array<IProperty>;
  ngOnInit(): void {
this.housingsvc.getAllProperties().subscribe(data=>{
  this.Propertieslist=data;
  console.log(data)})
  }


}
