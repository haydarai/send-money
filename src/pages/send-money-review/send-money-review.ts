import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { SendMoneyReceiptPage } from '../send-money-receipt/send-money-receipt';

/**
 * Generated class for the SendMoneyReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-send-money-review',
  templateUrl: 'send-money-review.html',
})
export class SendMoneyReviewPage {

  private transaction = {
    amount: null,
    contact: {
      name: '',
      avatar: ''
    }
  };

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendMoneyReviewPage');
    this.transaction = this.navParams.get('transaction');
  }

  reviewTransaction() {
    const confirm = this.alertCtrl.create({
      title: 'Send now?',
      message: 'Are you sure all information are correct already?',
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Continue',
        handler: () => {
          this.navCtrl.setRoot(SendMoneyReceiptPage, {
            transaction: this.transaction
          },
            {
              animate: true,
              direction: 'forward'
            });
        }
      }]
    });
    confirm.present();
  }

}
