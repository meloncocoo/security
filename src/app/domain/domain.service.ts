import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Domain } from  './models/domain';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DomainService {
  private url: string = `${API}`;

  constructor(private http: Http) {
    console.log(this.url);
  }

  getDomains(): Promise<Domain[]> {
    return this.http.get('/assets/api/domain.json')
      .toPromise()
      .then((res) => res.json() as Domain[])
      .catch(this.handleError);
  }

  getDomainByName(name: string): Promise<Domain> {
    return this.getDomains().then((entities) => entities.find((entity) => entity.name === 'name'));
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
