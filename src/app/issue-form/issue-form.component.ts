import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent{
  @Input() issue: Issue;
  public model: Issue;
  @Output() submit: EventEmitter<Issue> = new EventEmitter<Issue>();

  constructor() { }

  ngOnChanges(): void {
    this.model = Object.assign({}, this.issue);
  }

  onSubmit(form): void {
    console.log(form);
    if (!form.valid) {
      return;
    }
    this.submit.emit(this.model);
  }

}
