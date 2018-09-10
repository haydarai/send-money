import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { SiriShortcuts } from '@ionic-native/siri-shortcuts'

/**
 * Generated class for the TransactionHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transaction-history',
  templateUrl: 'transaction-history.html',
})
export class TransactionHistoryPage {

  private transactions = [];

  constructor(public contacts: Contacts, public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer, public siriShortcuts: SiriShortcuts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionHistoryPage');

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
              avatar: null,
              amount: 50
            };
            if (contacts[i].photos !== null) {
              contact.avatar = this.sanitizer.bypassSecurityTrustUrl(contacts[i].photos[0].value);
            } else {
              contact.avatar = "assets/imgs/logo.png";
            }
            this.transactions.push(contact);
          }
        }
      })
      .catch(error => console.error(error));

    this.siriShortcuts.donate({
      persistentIdentifier: 'check-transaction-history',
      title: 'Check transaction history',
      suggestedInvocationPhrase: 'Check transaction history',
      userInfo: { page: 'transaction' },
      isEligibleForSearch: true,
      isEligibleForPrediction: true,
    })
      .then(() => console.log('Shortcut donated.'))
      .catch((error: any) => console.error(error));
  }

  addShortcut() {
    console.log('click addShortcut')
    this.siriShortcuts.present({
      persistentIdentifier: 'check-transaction-history',
      title: 'Check transaction history',
      suggestedInvocationPhrase: 'Check transaction history',
      userInfo: { page: 'transaction' },
    })
      .then(() => console.log('Shortcut added.'))
      .catch((error: any) => console.error(error));
  }

}
