import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Ambulance } from '../pojo/Ambulance';
 //import { Vehicles } from "../components/vehicles";
import { VehiclesInfo } from "../Pojo/VehiclesInfo";
 import { Beacons } from "../Pojo/Beacons";
import * as Rx from "rxjs/Rx";
import { Vehicles } from "../Pojo/Vehicles";
import { from, Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
// import { data } from "jquery";
import { DriverPojo } from "../Pojo/DriverPojo";
import { Ambulance } from "../Pojo/Ambulance";

@Injectable({
  providedIn: "root",
})
export class ApicallService {
  getAllAmbulanceNames() {

      return this.httpClient.get(`http://127.0.0.1:8080/getAllVehicles`).pipe(
        map((data: Vehicles[]) => {
          return data;
        }),
        catchError((error) => {
          return throwError("Something went wrong!");
        })
      );
    
  }
 
  // val ip = "192.168.29.182";
  // val port = "8080";

  constructor(private httpClient: HttpClient) { }
  // getUsers() {
  //   return this.httpClient.get(`http://127.0.0.1:8080/getAllVehicles`).pipe(
  //     map((data: Vehicles[]) => {
  //       return data;
  //     }),
  //     catchError((error) => {
  //       return throwError("Something went wrong!");
  //     })
  //   );
  // }

  // getThisVehicle(data: string) {
  //   return this.httpClient
  //     .post(`http://127.0.0.1:8080/getUserDetails`, null, {
  //       headers: new HttpHeaders().set("name", data),
  //     })
  //     .pipe(
  //       map((data: Vehicles[]) => {
  //         return data;
  //       }),
  //       catchError((error) => {
  //         return throwError("Something went wrong!");
  //       })
  //     );
  // }
  AddDriver(driver: DriverPojo) 
  {

    console.log(driver.ambulance_model)
    console.log(driver.misc)
    console.log(driver.driver_name)
    console.log(driver.password)
    console.log(driver.reg_num)
    return this.httpClient.post(`http://127.0.0.1:8080/AddDriver`, driver).pipe(
      map(
        (data: any) => {

          return data;
        }
      ),
      catchError((error) => {
        console.log(error)
        return throwError("Something went wrong!" + error);
      })
    );
  }

  getThisVehicle(data: string) {
    return this.httpClient
      .post(`http://127.0.0.1:8080/getUserDetails`, null, {
        headers: new HttpHeaders().set("name", data),
      })
      .pipe(
        map((data: Vehicles[]) => {
          return data;
        }),
        catchError((error) => {
          return throwError("Something went wrong!");
        })
      );
  }
  getAllVechiles() {
    return this.httpClient.get("http://127.0.0.1:8080/getVehiclesUpdate").pipe(
      map((data: VehiclesInfo[]) => {
        return data;
      }),
      catchError((error) => {
        return throwError("Something went wrong!");
      })
    );
  }

  getAllBeacons() {
    return this.httpClient
      .get("http://127.0.0.1:8080/getAllBeaconsForServer")
      .pipe(
        map((data: Beacons[]) => {
          return data;
        }),
        catchError((error) => {
          return throwError("Something went wrong!");
        })
      );
  }

  // getAllAmbulances() {
  //   return this.httpClient
  //     .get("http://127.0.0.1:8080/GetAllAmbulances")
  //     .pipe(
  //       map((data: Ambulance) => {
  //         return data;
  //       }),
  //       catchError((error) => {
  //         return throwError("Something went wrong!");
  //       })
  //     );
  // }

  AddAmbulance(ambulance_data: Ambulance) {

    return this.httpClient
      .post(`http://127.0.0.1:8080/AddAmbulance`, ambulance_data)
      .pipe(
        map(
          (data: any) => {
       
            return data;
          
          }),
        catchError((error) => {
          return throwError("Something went wrong!");
        })
      );
  }

  getAllAmbulances() {
    return this.httpClient
      .get("http://127.0.0.1:8080/GetAllAmbulances")
      .pipe(
        map((data: Ambulance) => {
          return data;
        }),
        catchError((error) => {
          return throwError("Something went wrong!");
        })
      );
  }



// AddDriver(driver_pojo : DriverPojo)
// {


// return this.httpClient.post(`http://127.0.0.1:8080/AddDriver`,driver_pojo)
// .pipe(
//   map(
//     (data:any)=>{
//       return data;
//     }),
//     catchError((error)=>{
//       return throwError("Something went wrong!");
//     })
//   );


// }

  // AddDriver(driver: Driver) {

  //   console.log(driver.ambulance_name)
  //   console.log(driver.city)
  //   console.log(driver.driver_name)
  //   console.log(driver.password)
  //   console.log(driver.reg_num)
  //   return this.httpClient.post(`http://127.0.0.1:8080/AddDriver`, driver).pipe(
  //     map(
  //       (data: any) => {

  //         return data;
  //       }
  //     ),
  //     catchError((error) => {
  //       console.log(error)
  //       return throwError("Something went wrong!" + error);
  //     })
  //   );
  // }
  // AddBeacon(beacon: Beacons) {

  //   return this.httpClient.post('http://127.0.0.1:8080/AddBeacon', beacon).pipe(
  //     map(
  //       (data: any) => {

  //         return data;
  //       }
  //     ),
  //     catchError((error) => {
  //       console.log(error)
  //       return throwError("Something went wrong!" + error);
  //     })
  //   );
  // }


  getAllDrivers() {
    return this.httpClient.get(`http://127.0.0.1:8080/GetAllDrivers`).pipe(
      map((data: DriverPojo) => {

console.log(data)
        return data;

      }, catchError((error) => {
        return throwError("Something went wrong!" + error);
      }))

    )

  }
}


