import { Component, OnInit, Input } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'whois',
  templateUrl: 'whois.component.html'
})
export class WhoisComponent implements OnInit {
  private entity: any;

  @Input() domainId: number;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getWhois();
  }

  getWhois() {
    this.domainService.getWhoisByDomainId(this.domainId)
      .then((entity) => this.entity = entity);
  }
}
