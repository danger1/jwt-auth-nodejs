import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsModule, AlertModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { LoginComponent } from './pages/login/login.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { AuthService } from './auth/auth.service';
import { ApiService } from './auth/api.service';
import { CommonService } from './api-services/common.service';
import { AuthGuard } from './auth/authguard.service';
import { RoleGuard } from './auth/roleguard.service';
import { LoginGuard } from './auth/loginguard.service';

@NgModule({
  declarations: [
  AppComponent,
	HomeComponent,
  BookComponent,
  LoginComponent,
  NewBookComponent,
  ProfileComponent
  ],
  imports: [
	  CommonModule,
	  FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	  TabsModule.forRoot(),
  	AlertModule.forRoot()
  ],
  providers: [
    AuthService,
    ApiService,
    CommonService,
    AuthGuard,
    RoleGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
