import { Component, OnInit } from '@angular/core';
import { DriverPojo } from 'src/app/Pojo/DriverPojo';
import { ApicallService } from 'src/app/Services/ApicallService';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']})
export class UserProfileComponent implements OnInit {
public password_val : any
public driver_data: DriverPojo;
  constructor(public api : ApicallService) { }

  ngOnInit() {
  }
  AddDriver(driverName:any,ambulanceModel:any,regNumber:any,mobileNumber:any,misc:any){

    console.log(driverName);
    console.log(ambulanceModel);
    console.log(regNumber);
    console.log(mobileNumber);
    console.log(driverName);
    console.log(this.password_val);

    this.driver_data = new DriverPojo()
this.driver_data.driver_name = driverName
this.driver_data.ambulance_model = ambulanceModel
this.driver_data.misc = misc
this.driver_data.mobile = mobileNumber
this.driver_data.reg_num = regNumber
this.driver_data.password = this.password_val
    this.api.AddDriver(this.driver_data).subscribe(
      (data:any)=>{
        console.log(data.message);
        //this.openSnackBar(data.message,"Ok");
      }
    )
    

    // String driver_name;
    // String ambulance_model;
    // String reg_num;
    // String mobile;
    // String misc;
    // String password;


  }
  GeneratePassword()
  {

var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 9; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   this.password_val = result

  }


  

}
