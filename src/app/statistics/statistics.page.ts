import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';


declare var google: any;

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})

export class StatisticsPage implements OnInit {

  map: any;
  marker:any;
  latitude:any="";
  longitude:any="";
  timestamp:any="";
  items:any;

  help:any;
  onwu:any;
  freed:any;
  active:any;
  samples:any;
 
  constructor( 

  private geolocation: Geolocation, 
  private platform: Platform,  
  private http: HTTP,

  ) { }

  

 /* getLocation() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      this.latitude = res.coords.latitude.toString();
      this.longitude = res.coords.longitude.toString();

      var gps = new google.maps.LatLng(res.coords.latitude, res.coords.longitude);
      if(this.marker == null) {

        this.marker = new google.maps.Marker({
        position: gps,
        map:this.map,
        title: 'my position'
      })

    } else {
      this.marker.setPosition(gps);
    }
    }).catch((error) => {
      console.log(error);
    })
  }
*/
  
  getLocation() {
    var ref = this;

    let watch = this.geolocation.getCurrentPosition();
    
    watch.then( (position) => {
      
      var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     
      if(ref.marker == null) {

          ref.marker = new google.maps.Marker({
          position: gps,
          map:ref.map,
          title: 'my position'
        })

      } else {
        ref.marker.setPosition(gps);
      }

      ref.map.panTo(gps);
      ref.latitude = position.coords.latitude.toString();
      ref.longitude = position.coords.longitude.toString();
    })
  }

  async getCovidData() {

 
    try {
      const url = 'https://covidnigeria.herokuapp.com/api';
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers);

      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      this.items =  JSON.parse(response.data);
      this.help = this.items['data'].totalConfirmedCases;
      this.onwu = this.items['data'].death;
      this.freed = this.items['data'].discharged;
      this.active = this.items['data'].totalActiveCases;
      this.samples = this.items['data'].totalSamplesTested;
      console.log(response.headers);

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }
  

  ngOnInit() {

    this.getCovidData();
    
    this.platform.ready().then(() => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
      });
  
    })
    
    this.getLocation();
    
  }

}
