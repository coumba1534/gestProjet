import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/dashboard-layout/header/header.component';
import { SidebarComponent } from './shared/dashboard-layout/sidebar/sidebar.component';
import { FooterComponent } from './shared/dashboard-layout/footer/footer.component';
import { DashboardLoyoutComponent } from './shared/dashboard-layout/dashboard-loyout/dashboard-loyout.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardLoyoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
