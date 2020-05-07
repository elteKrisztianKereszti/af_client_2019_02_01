import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  issues: Issue[] = [
    {
      id: 1,
      place: 'PC42',
      title: 'The issue #1',
      description: 'Fatallica',
      status: 'NEW',
    },
    {
      id: 2,
      place: 'PC12',
      title: 'MegaIssue',
      description: 'MegaFatal',
      status: 'INPROGRESS',
    },
    {
      id: 3,
      place: 'Air',
      title: 'Unknown issue',
      description: 'U.F.O',
      status: 'INPROGRESS',
    },
    {
      id: 4,
      place: 'PCxxx',
      title: 'Broken Windows 10',
      description: 'Everywhere',
      status: 'RESOLVED'
    },
  ];

  constructor() { }

  public getIssues(): Array<Issue> {
    return this.issues;
  }

  public getIssue(id: number): Issue {
    return this.issues.find((issue: Issue) => issue.id === id);
  }

  public createIssue(createdIssue: Issue): void {
    const issue: Issue = new Issue();

    issue.id = Math.floor(Math.random() * 1000000);
    issue.status = 'NEW';
    issue.description = createdIssue.description;
    issue.place  = createdIssue.place;
    issue.title = createdIssue.title;
    this.issues.push(issue);
  }

  public deleteIssue(id: number): void {
    const issue: Issue = this.getIssue(id);
    const index: number = this.issues.indexOf(issue, 0);

    if (index > -1) {
      this.issues.splice(index, 1);
    }
  }

  public updateIssue(updatedIssue: Issue): void {
    const issue: Issue = this.getIssue(updatedIssue.id);

    issue.description = updatedIssue.description;
    issue.place  = updatedIssue.place;
    issue.title = updatedIssue.title;
  }
}
