import { Task } from './app/task-list/shared/task.model';

let taskList: Task[] = [];

for (let i = 0; i < 5; i++) {
  taskList.push(new Task(`Test ${i}`));
}

taskList[2].toggle();

export const MOCKS: Task[] = taskList;