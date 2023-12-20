import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { DriverComponent } from './pages/driver/driver.component';
import { AmbulancesComponent } from './pages/ambulances/ambulances.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,NgxMatSelectSearchModule,
    HttpClientModule,
    ComponentsModule,MatSnackBarModule,
    NgbModule,
    RouterModule,MatFormFieldModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    DriverComponent,
    AmbulancesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
