import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { DriverComponent } from 'src/app/pages/driver/driver.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AmbulancesComponent } from 'src/app/pages/ambulances/ambulances.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'driver',         component: DriverComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'ambulances',           component: AmbulancesComponent },
    
];
