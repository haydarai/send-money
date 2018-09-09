import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SendMoneyFormPage } from '../pages/send-money-form/send-money-form';
import { ContactListPage } from '../pages/contact-list/contact-list';
import { SendMoneyReviewPage } from '../pages/send-money-review/send-money-review';
import { SendMoneyReceiptPage } from '../pages/send-money-receipt/send-money-receipt';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SendMoneyFormPage,
    ContactListPage,
    SendMoneyReviewPage,
    SendMoneyReceiptPage,
    TransactionHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SendMoneyFormPage,
    ContactListPage,
    SendMoneyReviewPage,
    SendMoneyReceiptPage,
    TransactionHistoryPage
  ],
  providers: [
    Contacts,
    Diagnostic,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
