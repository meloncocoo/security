import { Component, OnInit } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'whois',
  templateUrl: 'whois.component.html'
})
export class WhoisComponent implements OnInit {
  private entity: any;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getWhois();
  }

  getWhois() {
    this.domainService.getWhoisByDomainId(2)
      .then((entity) => this.entity = entity);
  }
}
