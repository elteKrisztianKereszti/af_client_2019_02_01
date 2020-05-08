import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issueUrl = 'http://localhost:8080/issues';

  constructor(
    private http: HttpClient
  ) { }

  public getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>(`${this.issueUrl}`, httpOptions).toPromise();
  }

  public getIssue(id: number): Promise<Issue> {
    return this.http.get<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

  public createIssue(issue: Issue): Promise<Issue> {
    return this.http.post<Issue>(`${this.issueUrl}`, issue, httpOptions).toPromise();
  }

  public updateIssue(issue: Issue): Promise<Issue> {
    return this.http.put<Issue>(`${this.issueUrl}/${issue.id}`, issue, httpOptions).toPromise();
  }

  public deleteIssue(id: number): Promise<Issue> {
    return this.http.delete<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

}
