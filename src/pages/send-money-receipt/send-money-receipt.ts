import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendMoneyFormPage } from '../send-money-form/send-money-form';

/**
 * Generated class for the SendMoneyReceiptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-money-receipt',
  templateUrl: 'send-money-receipt.html',
})
export class SendMoneyReceiptPage {

  private transaction = {
    amount: null,
    contact: {
      name: '',
      avatar: ''
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendMoneyReceiptPage');
    this.transaction = this.navParams.get('transaction');
  }

  addShortcut() {
    // TO DO: implement creation of Siri Shortcut
  }

  finish() {
    this.navCtrl.setRoot(SendMoneyFormPage, {
    },
      {
        animate: true,
        direction: 'forward'
      });
  }

}
