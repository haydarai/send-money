import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendMoneyReviewPage } from './send-money-review';

@NgModule({
  declarations: [
    SendMoneyReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SendMoneyReviewPage),
  ],
})
export class SendMoneyReviewPageModule {}
