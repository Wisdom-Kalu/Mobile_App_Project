import { Component, OnInit } from '@angular/core';
import { SMS, SmsOptions } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { ToastController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Device } from '@ionic-native/device/ngx';

//import { DatabaseService, Contact } from '../services/database.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  //instance variables of the class
  items: any;
  smsNo: any;
  uuid: any;
  arr: String[] = []; // Array to store extracted phone numbers from the API calls
  myContacts: Contact[] = []; // Array of contacts. Was not used though

  constructor( 
  
    private sms: SMS, 
    private callNumber: CallNumber,
    private contacts: Contact,
    private toastcontroller: ToastController,
    private http: HTTP,
    private device: Device
  
  ) { 
    this.uuid = this.device.uuid;
    console.log(this.uuid);
  }

  /*An asynchronous function to get contacts */
  async getData() {

    try {
      const url = 'http://thecode4allinitiative.org/finalExam/getAllPersons.php?uuid=' + this.uuid;
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers);

      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      this.items =  JSON.parse(response.data);
      console.log("Data pulled out successfully");
     // console.log('heyya. could this be it? ' + this.items[0].phoneNumber)

     // loop through the JSON arra
      for (var i = 0; i < this.items.length; i++) {
      
        this.arr.push(this.items[i].phoneNumber); // extract the phone numbers from the JSON array and copy them into the new array
      
      } 
      console.log('here is the array ' + this.arr);
      
      /* join all the phone numbers in the array to become one string seperated by a comma, which can be easily read by the
      messaging app so that the message can be sent to all the contact phonenumbers at once */
      this.smsNo = this.arr.join(',');  
     
      console.log('the sms numbers are ' + this.smsNo);
      return this.smsNo; // return the numbers as one string

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }


  /*Load contacts from the phones phonebook. Was not quite used*/
  loadContacts() {

    let options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };

    this.contacts.find(['*'], options).then((contacts: Contact[]) => { // find all the contacts and load them
      this.myContacts = contacts;
      console.log('Contacts: ', contacts);
    });
  }


  /* the send sms function */
  sendSMS(contact: Contact) {
    if(confirm("You are about to send an sms to NCDC telling them you've caught COVID-19. Proceed?")){
        //this.sms.send(contact.phoneNumbers[0].value, 'Hello');
        var options: SmsOptions = {
          replaceLineBreaks : false,
          android: {
            intent: 'INTENT' 
          }
        }

        this.sms.send('+2348099936312', 'Help! I think I\'ve got COVID-19!', options).then( (data) => { // pass the smsNo variable to the phone number field
          alert(JSON.stringify(data));
        }, (err) => {
          alert(JSON.stringify(err));
        });
    }

  }

  /* the send sms function */
  notifyContacts(contact: Contact) {
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

  /* Call NCDC function */
  callNCDC(contact: Contact) {

    if(confirm("You are about to call NCDC for help since you've caught the virus. Proceed?")) {
      this.callNumber.callNumber('+2347080631500', true);
    }

  }

  /* this is for creating a new contact in the phones phonebook. Was not used though */
  createContact() {
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, 'Afsanat', 'Ineza');
    contact.phoneNumbers = [new ContactField('mobile', '+2348104976312')];
    contact.save().then( async () => {
      let toast = await this.toastcontroller.create({
        message: 'contacted added successfully'
      });
      toast.present();
    },

    (error: any) => console.error('error saving contact.', error)
    
    );
    
  }

  ngOnInit() { 
    this.getData(); //load the data once the app loads
  }

}
