import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

let COMPONENTS = [
  HeaderComponent
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class CoreModule { }
