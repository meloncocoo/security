import { Component, OnInit, Input } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'ip',
  templateUrl: 'ip.component.html'
})
export class IPComponent implements OnInit {
  private entity: any;

  @Input() domainId: number;

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getIPs();
  }

  getIPs() {
    this.domainService.getIPsByDomainId(this.domainId).then((entity) => this.entity = entity);
  }
}
