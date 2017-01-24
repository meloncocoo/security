import { Component, OnInit } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'ip',
  templateUrl: 'ip.component.html'
})
export class IPComponent implements OnInit {
  private entity: any;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getIPs();
  }

  getIPs() {
    this.domainService.getIPsByDomainId(2).then((entity) => this.entity = entity);
  }
}
