import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendMoneyFormPage } from './send-money-form';

@NgModule({
  declarations: [
    SendMoneyFormPage,
  ],
  imports: [
    IonicPageModule.forChild(SendMoneyFormPage),
  ],
})
export class SendMoneyFormPageModule {}
