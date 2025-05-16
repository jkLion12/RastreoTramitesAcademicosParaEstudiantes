import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RastreoComponent } from './vistas/rastreo/rastreo.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card'; 



@NgModule({
  declarations: [
    AppComponent,
    RastreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    TimelineModule,
    CardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
