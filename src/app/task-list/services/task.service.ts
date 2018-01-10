import { Injectable } from '@angular/core';
import { Task } from '../shared/task.model';
import { MOCKS } from '../../../mock-tasks';

@Injectable()
export class TaskService {
  tasks = MOCKS.slice();

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(name): boolean {
    if (!this.tasks.find((task) => task.name === name)) {
      this.tasks.push(new Task(name));
      return true;
    }
    return false;
  }

  // Inverse of add
  removeTask(name): boolean {
    let idx = this.tasks.findIndex((a) => a.name === name);
    if (idx > 0) {
      this.tasks.splice(idx, 1);
      return true;
    }
    return false;
  }
}
