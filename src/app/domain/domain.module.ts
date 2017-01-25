import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  TabsModule
} from 'ng2-bootstrap';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DomainRoutingModule } from './domain-routing.module';

import { DomainService } from './domain.service';

import { DomainComponent }        from './domain.component';
import { IPComponent }            from './ip.component';
import { SubDomainsComponent }    from './sub-domains.component';
import { WhoisComponent }         from './whois.component';
import { CertificateComponent }   from './cert.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    HttpModule,
    DomainRoutingModule,
    TabsModule
  ],
  exports: [],
  declarations: [DomainComponent, IPComponent, SubDomainsComponent, WhoisComponent, CertificateComponent],
  providers: [DomainService],
})
export class DomainModule { }
