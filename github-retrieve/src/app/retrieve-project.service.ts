import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RetrieveProjectService {

  private searchRepositoriesEndPoint = "https://api.github.com/search/repositories?q=angular+is:public";
  private getRepositoriesDetailsEndPoint = "https://api.github.com/repositories/";
  constructor(private http: HttpClient) { }
  getReporsitoriesForAngularProject(first: number, rows: number, filter: string, language: string): Observable<{ total_count: number, items: Repository[] }> {
    let url;
    // if (place && !language) {
    //   url = `${this.searchReporsitoriesEndPoint}location:${place}`;
    // } else if (!place && language) {
    //   url = `${this.searchReporsitoriesEndPoint}language:${language}`;
    // } else {
    //   url = `${this.searchReporsitoriesEndPoint}location:${place}+language:${language}`;
    // }
    url = `${this.searchRepositoriesEndPoint}+${filter ? filter : ""}&page=${Math.round(first / rows) + 1}&per_page=${rows}`
    return this.http.get(url, { headers: this.getHeaders() })
      .map(r => r)
      .catch(this.handleError);
  }

  protected getHeaders() {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/vnd.github.v3+json' });
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

  getRepository(url: string): Observable<Repository> {
    return this.http.get(url, { headers: this.getHeaders() })
      .map(r => r)
      .catch(this.handleError);
  }
}

export interface Repository {
  id,
  name,
  full_name,
  svn_url,
  created_at,
  pushed_at,
  description,
  stargazers_count,
}