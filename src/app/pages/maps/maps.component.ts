import { Component, OnInit } from "@angular/core";
import { Beacons } from "src/app/Pojo/Beacons";
import { ApicallService } from "../../Services/ApicallService";
import { VehiclesInfo } from "../../Pojo/VehiclesInfo";
import { google } from "@google/maps";
declare const google: any;
var map: google.maps.Map;

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent implements OnInit {
  beaconinfo: Beacons[];
  vehiclesinfo: VehiclesInfo[];
  constructor(private apiservice: ApicallService) {}
  vehiclepathdata: VehiclesInfo[];
  private directionsRenderer: any;
  ngOnInit() {
    let lat = 13.1169877;
    let lng = 80.2878786;

    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
        },
      ],
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Hello World!",
    });

    var contentString =
      '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
      "<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>";

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

    this.getAllVehicles();
  }
  getAllVehicles() {
    this.apiservice.getAllBeacons().subscribe((data: any) => {
      this.beaconinfo = data;
      
      console.log(this.beaconinfo);

      for (var index in this.beaconinfo) {
        console.log(this.beaconinfo[index]["name"]);
        console.log(this.beaconinfo[index]["latitude"]);
        console.log(this.beaconinfo[index]["longitude"]);

        const beacon = {
          lat: Number(this.beaconinfo[index]["latitude"]),
          lng: Number(this.beaconinfo[index]["longitude"]),
        };

        var marker_beacon = new google.maps.Marker({
          position: beacon,
          animation: google.maps.Animation.Bounce,
          title: this.beaconinfo[index]["name"],
        });

        var circle_beacon = new google.maps.Circle({
          map: map,
          radius: 1000, // 10 miles in metres
          fillColor: "#00FF00",
        });
        circle_beacon.bindTo("center", marker_beacon, "position");
        marker_beacon.setMap(map);

     
      }
    });
    this.apiservice.getAllVechiles().subscribe((data: any) => {
      this.vehiclesinfo = data;

      for (var index in this.vehiclesinfo) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            this.vehiclesinfo[index]["latitude"],
            this.vehiclesinfo[index]["longitude"]
          ),
          animation: google.maps.Animation.Bounce,
          title: this.vehiclesinfo[index]["name"],
        });

        var circle = new google.maps.Circle({
          map: map,
          radius: 1000, // 10 miles in metres
          fillColor: "#AA0000",
        });
        circle.bindTo("center", marker, "position");
        marker.setMap(map);
        marker.addListener('click', () => {
          this.apiservice.getThisVehicle(this.vehiclesinfo[index]["name"]).subscribe((data: any) => 
          { 
    
            this.vehiclepathdata = data;
    
            console.log(this.vehiclepathdata)
            console.log("here");
    
    
    
            this.directionsRenderer = new google.maps.DirectionsRenderer({
              suppressMarkers: false
            });
            const directionsService = new google.maps.DirectionsService;
            this.directionsRenderer.setMap(map);
            directionsService.route({
              origin: {
                lat: this.vehiclepathdata['origin_latitude'],
                lng: this.vehiclepathdata['origin_longitude']
              },
              destination: {
                lat: this.vehiclepathdata['destination_latitude'],
                lng: this.vehiclepathdata['destination_longitude']
              },
              travelMode: 'DRIVING'
            }, (response, status) => {
              if (status === 'OK') {
                this.directionsRenderer.setDirections(response);
                  console.log("done");
    
              } else {
                console.log('Directions request failed due to ' + status);
              }
            });
    
    
          })
          
        });
      }
    });
  }
}
