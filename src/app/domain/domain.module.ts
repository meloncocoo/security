import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  TabsModule
} from 'ng2-bootstrap';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DomainRoutingModule } from './domain-routing.module';

import { DomainService } from './domain.service';

import { DomainComponent }   from './domain.component';
import { IPComponent }   from './ip.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    HttpModule,
    DomainRoutingModule,
    TabsModule
  ],
  exports: [],
  declarations: [DomainComponent, IPComponent],
  providers: [DomainService],
})
export class DomainModule { }
