import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import {
  DropdownModule,
  CollapseModule,
  TabsModule,
  TooltipModule
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
    RouterModule,
    SharedModule,
    DropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class CoreModule { }
