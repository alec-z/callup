import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { ContactComponent } from './contact/contact.component';
import { FavouriteOrderComponent } from './favourite-order/favourite-order.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestionaireComponent,
    WatchListComponent,
    ContactComponent,
    FavouriteOrderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
