import { NgModule } from '@angular/core';

import {
  TabsModule
} from 'ng2-bootstrap';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DomainRoutingModule } from './domain-routing.module';

import { DomainService } from './domain.service';

import { DomainComponent }   from './domain.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    DomainRoutingModule,
    TabsModule
  ],
  exports: [],
  declarations: [DomainComponent],
  providers: [DomainService],
})
export class DomainModule { }
