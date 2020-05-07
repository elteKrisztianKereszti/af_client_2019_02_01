import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  private issues: Issue[] = [];
  public filteredIssues: Issue[];
  public selectedStatus: string;
  public selectedIssue: Issue;

  constructor(
    private issueService: IssueService
  ) {
    this.issues = issueService.getIssues();
  }

  public ngOnInit(): void {
    this.selectedStatus = '';
    this.filter();
  }

  public onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.filter();
  }

  public onSelectIssue(issue: Issue): void {
    this.selectedIssue = issue;
  }

  public onFormSubmit(issue: Issue): void {
    if (issue.id > 0) {
      this.issueService.updateIssue(issue);
    } else {
      this.issueService.createIssue(issue);
    }
    this.selectedIssue = null;
  }

  public onNewClick(): void {
    this.selectedIssue = new Issue();
  }

  public onDeleteClick(id: number) {
    this.issueService.deleteIssue(id);
  }

  private filter(): void {
    this.filteredIssues = this.selectedStatus === ''
      ? this.issues
      : this.issues.filter(issue => issue.status === this.selectedStatus);
  }
}
