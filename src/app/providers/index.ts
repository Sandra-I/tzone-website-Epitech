import { Observable } from 'rxjs';
import { Requester } from './requester';
import { DataType } from "../models/dataType";

export abstract class Provider<T extends DataType> extends Requester {
  
  public getList(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.getUrl('list'));
  }

  public getById(id: string): Observable<T> {
    return this.httpClient.get<T>(this.getUrl(id));
  }

  public create(body: T | FormData): Observable<{id: string}> {
    return this.httpClient.post<{id: string}>(this.getUrl(), body);
  }

  public update(id: string, body: T | FormData): Observable<void> {
    return this.httpClient.put<void>(this.getUrl(id), body);
  }

  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.getUrl(id));
  }
}
