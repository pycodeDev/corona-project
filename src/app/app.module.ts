import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard/dashboard.service';
import { DataronaService } from './datarona/datarona.service';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DataronaComponent } from './datarona/datarona.component';
import { KontakComponent } from './kontak/kontak.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SourceDataComponent } from './source-data/source-data.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataronaComponent,
    KontakComponent,
    DashboardComponent,
    SourceDataComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DashboardService, DataronaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
