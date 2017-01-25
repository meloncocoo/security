import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomainService } from './domain.service';

import { Domain } from './models/domain';

@Component({
  selector: 'domain',
  templateUrl: 'domain.component.html'
})
export class DomainComponent implements OnInit, OnDestroy {
  value = { value: 0 };
  private back = { time: 0 };
  private entity: any;
  private notFound: boolean = false;
  private timer: any;

  constructor(
    private domainService: DomainService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let text = this.route.snapshot.params['text'];
    this.getDomains(text);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  getDomains(text: string) {
    this.entity = null;
    this.domainService.getDomainByName(text)
      .then((entity) => {
        this.entity = entity;
        this.notFound = !(entity);
        if (this.notFound) {
          this.back.time = 7;
          this.timer = setInterval(this.doNotFound.bind(this), 1000);
        }
      });
  }

  onSearch(text) {
    clearInterval(this.timer);
    this.getDomains(text);
  }

  doNotFound() {
    if (this.back.time <= 0) {
      this.notFound = false;
      this.router.navigate(['/home']);
      clearInterval(this.timer);
    } else {
      this.back.time -= 1;
    }
  }
}
