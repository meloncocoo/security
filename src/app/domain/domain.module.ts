import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent }   from './domain.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    DomainRoutingModule
  ],
  exports: [],
  declarations: [DomainComponent],
  providers: [],
})
export class DomainModule { }
