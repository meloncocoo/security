import { Component, OnInit } from '@angular/core';
import { DomainService } from './domain.service';

import { Domain } from './models/domain';

@Component({
  selector: 'domain',
  templateUrl: 'domain.component.html'
})
export class DomainComponent implements OnInit {
  value = { value: 0 };
  private entity: any;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.domainService.getDomainByName('www.sgx.com')
      .then((entity) => {
        this.entity = entity;
      });
  }
}
