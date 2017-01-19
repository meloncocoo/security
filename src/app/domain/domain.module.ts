import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { DomainRoutingModule } from './domain-routing.module';
import { DomainComponent }   from './domain.component';

@NgModule({
  imports: [
    CoreModule,
    DomainRoutingModule
  ],
  exports: [],
  declarations: [DomainComponent],
  providers: [],
})
export class DomainModule { }
