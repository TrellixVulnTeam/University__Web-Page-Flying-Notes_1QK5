import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserServiceService } from './services/user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  {provide: APP_BASE_HREF, useValue: '/'},
    UserServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
