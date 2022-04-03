import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { injector } from '../shared/injector';

export abstract class Requester {
  protected abstract url: string;
  protected httpClient: HttpClient;

  constructor() {
    this.httpClient = injector.get(HttpClient);
  }

  protected getUrl(end?: string): string {
    return `${environment.api}/${this.url}${end ? '/' + end : ''}`;
  }
}