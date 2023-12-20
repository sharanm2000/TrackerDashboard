import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/Services/ApicallService';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  public items:any=[];
  constructor(private api : ApicallService) {


    
   }

  ngOnInit(): void {

    

    this.api.getAllDrivers().subscribe(
      (data: any)=>
      {
        for (var index in data) 
        {
    
          this.items.push({
            driver_name: data[index].driver_name, 
            ambulance_name: data[index].ambulance_name, 
            reg_num: data[index].reg_num
            ,misc: data[index].misc
            ,mobile: data[index].mobile
            ,password: data[index].password
          });
        }
      }
    );

// for(let i = 0;i<10;i++)
// {

// let obj  = {id : "aa",name: "ss",desc:"vv"};
// this.items.push(obj);

// }

  }

}
