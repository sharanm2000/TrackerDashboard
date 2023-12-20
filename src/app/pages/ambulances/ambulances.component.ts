import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs-compat/operator/map';
import { Ambulance } from 'src/app/Pojo/Ambulance';
import { ApicallService } from 'src/app/Services/ApicallService';
@Component({
  selector: 'app-ambulances',
  templateUrl: './ambulances.component.html',
  styleUrls: ['./ambulances.component.css']
})
export class AmbulancesComponent implements OnInit {

  public items: any = [];
  constructor(private api : ApicallService) { }

  ngOnInit(): void 
  {
this.api.getAllAmbulances().subscribe(
  (data: any)=>
  {
    for (var index in data) 
    {

      this.items.push({
        ambulance_name: data[index].ambulance_name, registration_number: data[index].registration_number, ambulance_model: data[index].ambulance_model
        , city: data[index].city, misc: data[index].misc

      });
    }
  }
);
  }

}
