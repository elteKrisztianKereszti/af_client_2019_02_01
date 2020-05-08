import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';

@Component({
  selector: 'issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  public issue: Issue = null;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) { }

  public async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issue = await this.issueService.getIssue(id);
  }
}
