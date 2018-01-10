import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

  onCompleted() {
    if (this.task.completed) {
      return this.task.completed = confirm("Undo task?") ? false : true;
    }
    this.task.completed = !this.task.completed;
  }

}
