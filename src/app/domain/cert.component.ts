import { Component, OnInit } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'cert',
  templateUrl: 'cert.component.html'
})
export class CertificateComponent implements OnInit {
  private entity: any;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getCerts();
  }

  getCerts() {
    this.domainService.getCertsByDomainId(2)
      .then((entity) => this.entity = entity);
  }
}