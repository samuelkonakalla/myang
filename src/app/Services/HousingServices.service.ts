import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProperty } from '../Property/IProperty';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingServicesService {

constructor(private http: HttpClient) { }

getAllProperties():Observable<IProperty[]>
{
  return this.http.get("data/properties.json").pipe(map(data=>{
    const   newproprty:Array<IProperty> =[];
    for(const id in data)
    {
      if(data.hasOwnProperty(id))
      newproprty.push(data[id])
    }
    return newproprty;
  }))

}
}


