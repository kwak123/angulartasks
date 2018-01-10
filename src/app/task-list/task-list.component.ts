import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';

// To replace with server data
import { MOCKS } from '../../mock-tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = MOCKS.slice();

  constructor() { }

  ngOnInit() {
  }

}
