import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements AfterViewInit {
  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = {
    center: {lat: 45.0550078, lng: 38.980118},
    zoom: 16
  };
  center: google.maps.LatLngLiteral = {lat: 40, lng: -20};
  zoom = 4;

  markerOptions: google.maps.MarkerOptions;
  bounce: google.maps.Animation.BOUNCE;



  // marker: any;

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @ViewChild('#mapMarker') mapMarker2: any;
  


  mapMarker: any = {
    position: {
      lat: 45.0550078,
      lng: 38.980118,
    },
    title: "hello title",
    label: {
      color: 'black',
      text: 'Офис компании'
    },
    options: {
      draggable: true
    }
  };



  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDfNApIIi3OQ_B7BNpCVzOKBbbHOEPEuOY', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false))
        );
  }


  ngAfterViewInit(): void {

    console.log(this.mapMarker2);
    

  //   this.marker = {
  //     position: {
  //       lat: 45.0550078,
  //       lng: 38.980118
  //     },
  //     label: {
  //       color: 'black',
  //       text: 'Мы здесь'
  //     },
  //     title: 'Marker title',
  //     options: {draggable: true, animation: this.bounce}
  //   }
  }

  // onMarkerHover(marker: any) {
  //   this.mapMarker.options = this.markerOptions;
  // }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }




}