import { Component } from '@angular/core';
// import { SiriShortcuts } from '@ionic-native/siri-shortcuts';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalancePage');
    // this.siriShortcuts.donate({
    //   persistentIdentifier: 'check-balance',
    //   title: 'Check current balance',
    //   suggestedInvocationPhrase: 'Check balance',
    //   userInfo: {},
    //   isEligibleForSearch: true,
    //   isEligibleForPrediction: true,
    // })
    //   .then(() => console.log('Shortcut donated.'))
    //   .catch((error: any) => console.error(error));
  }

}
