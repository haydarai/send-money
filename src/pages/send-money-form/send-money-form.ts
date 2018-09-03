import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { ContactListPage } from '../contact-list/contact-list';
import { SendMoneyReviewPage } from '../send-money-review/send-money-review';

/**
 * Generated class for the SendMoneyFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-money-form',
  templateUrl: 'send-money-form.html',
})
export class SendMoneyFormPage {

  private transaction = {
    amount: null,
    contact: {
      name: '',
      avatar: ''
    }
  }

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendMoneyFormPage');
  }

  openContactList() {
    const contactListModal = this.modalCtrl.create(ContactListPage);
    contactListModal.onDidDismiss(contact => {
      if (contact) {
        this.transaction.contact = contact
      }
    });
    contactListModal.present();
  }

  reviewTransaction() {
    this.navCtrl.push(SendMoneyReviewPage, {
      transaction: this.transaction
    });
  }
}
