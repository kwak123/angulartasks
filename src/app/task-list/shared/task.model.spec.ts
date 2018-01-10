import { Task } from './task.model';

describe('Task Model', () => {
  let task: Task;
  let testName = 'test';

  beforeEach(() => {
    task = new Task('test');
  });

  it('should exist', () => {
    expect(task).toBeTruthy();
  });

  it('should have a name and completion status', () => {
    expect(task.name).toBeDefined();
    expect(task.completed).toBeDefined();
  })

  it('should be able to toggle completion status', () => {
    // Initialize as false
    task.toggle();
    expect(task.completed).toBe(true);

    task.toggle();
    expect(task.completed).toBe(false);
  });
});