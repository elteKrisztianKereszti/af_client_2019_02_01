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
  }

  public async ngOnInit(): Promise<void> {
    this.selectedStatus = '';
    this.issues = await this.issueService.getIssues();
    this.filter();
  }

  public onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.filter();
  }

  public onSelectIssue(issue: Issue): void {
    this.selectedIssue = issue;
  }

  public async onFormSubmit(issue: Issue): Promise<void> {
    if (issue.id > 0) {
      await this.issueService.updateIssue(issue);
      this.issues = await this.issueService.getIssues();
    } else {
      await this.issueService.createIssue(issue);
      this.issues = await this.issueService.getIssues();
    }
    this.selectedIssue = null;
    this.filter();
  }

  public onNewClick(): void {
    this.selectedIssue = new Issue();
  }

  public async onDeleteClick(id: number): Promise<void> {
    await this.issueService.deleteIssue(id);
    this.issues = await this.issueService.getIssues();
    this.filter();
  }

  private filter(): void {
    this.filteredIssues = this.selectedStatus === ''
      ? this.issues
      : this.issues.filter(issue => issue.status === this.selectedStatus);
  }
}
