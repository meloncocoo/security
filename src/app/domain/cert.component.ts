import { Component, OnInit, Input } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'cert',
  templateUrl: 'cert.component.html'
})
export class CertificateComponent implements OnInit {
  private entity: any;

  @Input() domainId: number;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getCerts();
  }

  getCerts() {
    this.domainService.getCertsByDomainId(this.domainId)
      .then((entity) => this.entity = entity);
  }
}