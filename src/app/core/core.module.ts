import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import {
  DropdownModule
} from 'ng2-bootstrap';

import { HeaderComponent } from './header.component';

let COMPONENTS = [
  HeaderComponent
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule.forRoot()
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class CoreModule { }
