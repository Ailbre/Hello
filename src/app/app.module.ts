import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloMarsComponent } from './hello-mars/hello-mars.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloMarsComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
