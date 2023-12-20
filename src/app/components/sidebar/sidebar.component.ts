import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },

    { path: '/user-profile', title: 'Add Driver',  icon:'ni-single-02 text-primary', class: '' },
    { path: '/driver', title: 'List Drivers',  icon:'ni-single-02 text-primary', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-primary', class: '' },
    { path: '/tables', title: 'Add Ambulances',  icon:'ni-ambulance text-primary', class: '' },
    { path: '/ambulances', title: 'List Ambulances',  icon:'ni-ambulance text-primary', class: '' },
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
