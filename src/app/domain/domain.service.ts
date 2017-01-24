import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Domain } from  './models/domain';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DomainService {
  private url: string = `${API}`;

  constructor(private http: Http) {
  }

  getDomains(): any {
    return this.http.get('/assets/api/domain.json')
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  getDomainByName(name: string): any {
    return this.getDomains().then((entities) => entities.find((entity) => entity.name === name));
  }

  getIPs(): any {
    return this.http.get('/assets/api/ip.json')
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  getIPsByDomainId(id: number): any {
    return this.getIPs().then((entities) => entities.find((entity) => entity.domainId === id));
  }

  getSubDomains(): any {
    return this.http.get('/assets/api/sub-domains.json')
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  getSubDomainsByDomainId(id: number): any {
    return this.getSubDomains()
      .then((entities) => entities.find((entity) => entity.domainId === id));
  }

  getWhois(): any {
    return this.http.get('/assets/api/whois.json')
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  getWhoisByDomainId(id: number): any {
    return this.getWhois()
      .then((entities) => entities.find((entity) => entity.domainId === id));
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  }
}
