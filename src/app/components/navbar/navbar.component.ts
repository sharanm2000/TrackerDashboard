import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/Services/ApicallService'; 
import { Vehicles } from 'src/app/Pojo/Vehicles'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public vehicles: Vehicles[];
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router,private apiService : ApicallService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.getUserList();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  getUserList() {
    this.apiService
      .getAllAmbulanceNames()
      .subscribe((data: any) => {
        console.log(data);
       console.log("-------------------------");
        this.vehicles = data;
      });
  }
}
