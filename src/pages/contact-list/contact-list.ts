import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { Diagnostic } from '@ionic-native/diagnostic';

/**
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {

  private people = [];

  constructor(public contacts: Contacts, public diagnostic: Diagnostic, public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactListPage');
    this.contacts.find([
      'name', 'photos'
    ], {
        filter: '',
        multiple: true
      })
      .then(contacts => {
        for (let i = 0; i < contacts.length; i++) {
          if (contacts[i].name.givenName !== null) {
            const { givenName, familyName } = contacts[i].name;
            const contact = {
              name: givenName + ' ' + familyName,
              avatar: null
            };
            if (contacts[i].photos !== null) {
              contact.avatar = this.sanitizer.bypassSecurityTrustUrl(contacts[i].photos[0].value);
            } else {
              contact.avatar = "assets/imgs/logo.png";
            }
            this.people.push(contact);
          }
        }
      })
      .catch(error => console.error(error));
  }

  contactSelected(person) {
    this.viewCtrl.dismiss(person);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
