import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Ambulance } from 'src/app/Pojo/Ambulance';

import { ApicallService } from 'src/app/Services/ApicallService';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public ambulance_data: Ambulance;
  constructor(private api : ApicallService, private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  ngOnInit() {
  }
test(
  ambulance_name:any,
  ambulance_model:any,
  registration_number:any,
  city:any,
  misc:any

  ){

    if(ambulance_name)
    {

      if(ambulance_model)
      {
        if(registration_number)
        {
  
          if(city)
          {
            if(misc)
            {
              console.log(ambulance_name);
              console.log(ambulance_model);
              console.log(registration_number);
              console.log(city);
              console.log(misc);

    
              this.ambulance_data = new Ambulance();
     this.ambulance_data.ambulance_name = ambulance_name;
     this.ambulance_data.ambulance_model = ambulance_model;
     this.ambulance_data.registration_number = registration_number;
     this.ambulance_data.city = city;
     this.ambulance_data.misc = misc;

        
              
              this.openSnackBar("saved","Ok");


              this.api.AddAmbulance(this.ambulance_data).subscribe(
                (data:any)=>{
                  console.log(data.message);
                  this.openSnackBar(data.message,"Ok");
                }
              )
              
            }
            else{
              this.openSnackBar("Missing misc","Ok");
            }

          }
          else{
            this.openSnackBar("Missing city","Ok");
            
          }


        }
        else
        {
          this.openSnackBar("Missing Registration Number","Ok");
        }
      }
      else{
        this.openSnackBar("Missing Registration Model","Ok");
      }
      
    }
    else{
      this.openSnackBar("Missing Ambulance Name","Ok");
    }


}
}
