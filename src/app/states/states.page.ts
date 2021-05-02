import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

declare var google: any;

@Component({
  selector: 'app-states',
  templateUrl: './states.page.html',
  styleUrls: ['./states.page.scss'],
})
export class StatesPage implements OnInit {

  map: any;
  marker:any;
  latitude:any="";
  longitude:any="";
  timestamp:any="";
  items:any;

  staty:any;
  help:any;
  value:any;
  total:any;
  onwu:any;
  freed:any;
  active:any;
  samples:any;
  result: String[] =[];

  constructor( private platform: Platform, private http: HTTP ) { }

  async getCovidData() {

 
    try {
      const url = 'https://covidnigeria.herokuapp.com/api';
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers);

      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      this.items =  JSON.parse(response.data);

      this.help = this.items["data"]["states"];

      for(var j = 0; j<this.help.length; j++) {

        this.result.push(this.help[j].state);
      }
      
      //console.log(this.result);
      console.log(response.headers);

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }


  async getStatesData() {

    var e = (<HTMLSelectElement>document.getElementById('ourstate')).value; //gets the value of the select field 
    //console.log('the value of the form is ' + $event.target.value);

    //var e = 'Lagos';
    try {
      const url = 'https://covidnigeria.herokuapp.com/api';
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers); // http GET API request

      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      this.items =  JSON.parse(response.data);

      this.help = this.items["data"]["states"]; // etract only data for the 36 Nigerian states

      // loops through the array of states and pull out the individual COVID-19 cases of all states
      for(var j = 0; j<this.help.length; j++) {

        if(e == this.help[j].state) { // if it finds the state that the user selected in the dropdown...
          this.total = this.help[j].casesOnAdmission;
          this.active = this.help[j].confirmedCases;
          this.onwu = this.help[j].death;
          this.freed = this.help[j].discharged;
          this.staty = this.help[j].state;
          console.log('the cases on admission is ' + this.total);
          console.log('the confirmed cases is ' + this.active);
          console.log('the death is ' + this.onwu);
          console.log('the freed is ' + this.freed);
          console.log('the state is ' + this.help);
        } else {
          console.log('invalid input');
        }

      }
      
      //console.log(this.result);
      console.log(response.headers);

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }

  }
  

  ngOnInit() { 
    this.getCovidData();
    this.getStatesData();
  }

}
