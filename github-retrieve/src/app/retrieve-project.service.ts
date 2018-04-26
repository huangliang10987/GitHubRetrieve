import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RetrieveProjectService {

  private searchReporsitoriesEndPoint = "https://api.github.com/search/repositories?q=angular+is:public+stars:>5";
  private getReporsitoriesDetailsEndPoint = "https://api.github.com/repositories/";
  constructor(private http: HttpClient) { }
  getReporsitoriesForAngularProject(place: string, language: string) {
    let url;
    // if (place && !language) {
    //   url = `${this.searchReporsitoriesEndPoint}location:${place}`;
    // } else if (!place && language) {
    //   url = `${this.searchReporsitoriesEndPoint}language:${language}`;
    // } else {
    //   url = `${this.searchReporsitoriesEndPoint}location:${place}+language:${language}`;
    // }
    url = this.searchReporsitoriesEndPoint;
    return this.http.get(url, { headers: this.getHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }

  protected getHeaders() {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/vnd.github.v3+json' });
  }
  private extractData(res: {incomplete:boolean,items:any[],total_count:number}) {
    console.log(res);
    return res;
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
