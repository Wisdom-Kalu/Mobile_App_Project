import { Component, OnInit } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Device } from '@ionic-native/device/ngx';
import { SMS, SmsOptions } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  uuid:any;
  person: any;
  smsNo: any;

   constructor( private http: HTTP, private uniqueDeviceID: UniqueDeviceID, private device: Device,  private sms: SMS ) 
   {

     this.uuid = this.device.uuid;
     console.log(this.uuid);

      /*this.uniqueDeviceID.get()
     .then((uuid: any) => console.log(uuid))
     .catch((error: any) => console.log(error));
      */
    }

    async checkInput(person) {
      if(person.fullName == null || person.fullName =="") {
        alert("please name is required");
      }
      else if(person.phoneNumber == null || person.phoneNumber == "") {
        alert("please phone number is required");
      } else {
        this.sendData(person);
      }
    }

    async sendData(person) {

      //this.uuid = this.device.uuid;
      let fullName = person.fullName;
      let phoneNumber = person.phoneNumber;
    
      //http://thecode4allinitiative.org/finalExam/addPerson.php?uuid=1234&fullName=person.fullName&20mpama&phoneNumber=+2345896321456
     
      try {
        const url = "http://thecode4allinitiative.org/finalExam/addPerson.php";
        const params = {uuid: this.uuid, fullName:fullName, phoneNumber:phoneNumber};
        const headers = {};

        console.log("checking the url " + url);
  
        const response = await this.http.post(url, params, headers);
  
        console.log(response.status);
        console.log("success. UUID is " + this.device.model);
        alert("Your Contact Tracing Record Has Been Added Successfully!");
        //console.log(JSON.parse(response.data)); // JSON data returned by server
        //console.log(response.headers);
  
      } catch (error) {
        console.error(error.status);
        console.error(error.error); // Error message as string
        //console.error(error.headers);
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
 
/*
  contactData = {};
  contacts: Contact[] = [];

  addContactDetails() {
    this.db.addContactData(this.contactData['fullName'], this.contactData['phoneNumber']).then(_ => {
      this.contactData = {};
      console.log('success');
    });
  }
 */

  ngOnInit() {
    this.sendData(this.person);
   }


}
