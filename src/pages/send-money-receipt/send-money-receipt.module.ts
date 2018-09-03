import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendMoneyReceiptPage } from './send-money-receipt';

@NgModule({
  declarations: [
    SendMoneyReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(SendMoneyReceiptPage),
  ],
})
export class SendMoneyReceiptPageModule {}
