import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { BlogComponent } from './blog/blog.component';
import { MdlModule } from 'angular2-mdl';
import {routing} from "./app.routing";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    BlogComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCj1jfd3UZRLxXQoxY66bNoePod9XYk0A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
