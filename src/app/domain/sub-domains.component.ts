import { Component, OnInit, Input } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'sub-domains',
  templateUrl: 'sub-domains.component.html'
})
export class SubDomainsComponent implements OnInit {
  private entity: any;

  @Input() domainId: number;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getIPs();
  }

  getIPs() {
    this.domainService.getSubDomainsByDomainId(this.domainId)
      .then((entity) => this.entity = entity);
  }
}
