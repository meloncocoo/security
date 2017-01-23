import { Component, OnInit } from '@angular/core';
import { DomainService } from './domain.service';

@Component({
  selector: 'domain',
  templateUrl: 'domain.component.html'
})
export class DomainComponent implements OnInit {
  value = { value: 0 };

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.domainService.getDomainByName('www.ncsi.com.cn').then((domain) => {
      console.log(domain);
    }, (err) => {
      console.error(err);
    });
  }
}
