import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TopNavBarComponent } from './layout/top-nav-bar/top-nav-bar.component';
import { SideNavBarComponent } from './layout/side-nav-bar/side-nav-bar.component';
import { MainContentPanelComponent } from './layout/main-content-panel/main-content-panel.component';
import { AnzComponent } from './bankapp/anz/anz.component';
import { WestpacComponent } from './bankapp/westpac/westpac.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PrimaryButtonComponent } from './utility/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    MainContentPanelComponent,
    AnzComponent,
    WestpacComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
