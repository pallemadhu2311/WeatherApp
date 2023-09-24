import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { PressurePipe } from './pipes/pressure.pipe';
import { TimePipe } from './pipes/time.pipe';
import { WindspeedPipe } from './pipes/windspeed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
    TemperaturePipe,
    PressurePipe,
    TimePipe,
    WindspeedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
