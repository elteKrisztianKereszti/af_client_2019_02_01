import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  private issues: Issue[] = [
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
  public filteredIssues: Issue[];
  public selectedStatus: string;

  constructor() { }

  public ngOnInit() {
    this.selectedStatus = '';
    this.filter();
  }

  public onFilterChange(status: string) {
    this.selectedStatus = status;
    this.filter();
  }

  private filter() {
    this.filteredIssues = this.selectedStatus === ''
    ? this.issues
    : this.issues.filter(issue => issue.status === this.selectedStatus);
  }
}
