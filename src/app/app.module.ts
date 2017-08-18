import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { InputFruitComponent } from './input-fruit/input-fruit.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyB_r2kM9e3CYmvwDxlcyoT-ClrT5SlP1gc",
    authDomain: "fruitproject-9ee6e.firebaseapp.com",
    databaseURL: "https://fruitproject-9ee6e.firebaseio.com",
    projectId: "fruitproject-9ee6e",
    storageBucket: "fruitproject-9ee6e.appspot.com",
    messagingSenderId: "170886173077"
};
@NgModule({
  declarations: [
    AppComponent,
    InputFruitComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
