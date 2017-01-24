import { Component, OnInit } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'sub-domains',
  templateUrl: 'sub-domains.component.html'
})
export class SubDomainsComponent implements OnInit {
  private entity: any;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getIPs();
  }

  getIPs() {
    this.domainService.getSubDomainsByDomainId(2).then((entity) => this.entity = entity);
  }
}
