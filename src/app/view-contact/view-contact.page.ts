import { Component, OnInit } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Device } from '@ionic-native/device/ngx';
import { SMS, SmsOptions } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.page.html',
  styleUrls: ['./view-contact.page.scss'],
})

export class ViewContactPage implements OnInit {

  //instance variables
  items: any;
  smsNo: any;
  uuid: any;
  arr: String[] = [];


  constructor( private http: HTTP, private uniqueDeviceID: UniqueDeviceID, private device: Device,  private sms: SMS ) { 

    this.uuid = this.device.uuid;
    console.log(this.uuid);

  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.getData();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  /* A fuction to get data using the Nigerian NCDC COVID-19 API*/
  async getData() {

    try {
      const url = 'http://thecode4allinitiative.org/finalExam/getAllPersons.php?uuid=' + this.uuid; //API call
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers);

      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      this.items =  JSON.parse(response.data);
      console.log("Data pulled out successfully");
     // console.log('heyya. could this be it? ' + this.items[0].phoneNumber)

     /*This function loops through the returned JSON data and extracts all the phone numbers, then push them into an array*/
      for (var i = 0; i < this.items.length; i++) {
      
        this.arr.push(this.items[i].phoneNumber);
      
      } 

      console.log('here is the array ' + this.arr); // printing out to console
      return this.arr;

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }


  /*Clear contact tracing list*/
  async deleteData() {
    
    if(confirm('Are you sure you want to delete everyone from your contact tracing list? This action cannot be reversed')) {

    try {
      const url = 'https://thecode4allinitiative.org/finalExam/deleteContact.php?uuid=' + this.uuid; //API call
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers);

      console.log(response.status);
      console.log("Delete successful");
      alert("Record deleted Successfully. Please refresh or leave the page");

      //console.log(JSON.parse(response.data)); // JSON data returned by server
      //console.log(response.headers);

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
      }

    }

  }

   /* the send sms function */
   notifyContacts() {
    //this.sms.send(contact.phoneNumbers[0].value, 'Hello');
    if(confirm("You are about to send an sms to everyone on your contact tracing list telling them you've caught COVID-19. Proceed?")){
      var options: SmsOptions = {
        replaceLineBreaks : false,
        android: {
          intent: 'INTENT' 
        }
      }
  
      this.sms.send(this.smsNo, 'Hello everyone. Please if you are receiving this message it means you\'re on my contact tracing list and I just want you to know that I unfortunately have gotten the COVID-19 virus. Kindly visit any testing centre to know your status since you\ve been in contact with me', options).then( (data) => { // pass the smsNo variable to the phone number field
        alert(JSON.stringify(data));
      }, (err) => {
        alert(JSON.stringify(err));
      });
    }

  }

  ngOnInit() {

    this.getData();
    
  }

}
