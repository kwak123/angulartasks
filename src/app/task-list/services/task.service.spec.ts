import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it('should have an array of tasks', inject([TaskService], (service: TaskService) => {
    expect(Array.isArray(service.tasks)).toBeTruthy();
  }));

  it('should have tasks getTasks(), addTask(), removeTask()', inject([TaskService], (service: TaskService) => {
    expect(service.getTasks).toBeTruthy();
    expect(service.addTask).toBeTruthy();
    expect(service.removeTask).toBeTruthy();
  }));

  it('should handle adding tasks uniquely, returning true or false', inject([TaskService], (service: TaskService) => {
    let oldLength = service.tasks.length;
    let expectedLength = oldLength + 1;
    let testName = 'ServiceSpecTest';
    let shouldBeTrue = service.addTask(testName);
    expect(service.tasks.length).toEqual(expectedLength);
    expect(service.tasks[service.tasks.length - 1].name).toBe(testName);
    expect(shouldBeTrue).toBe(true);

    let shouldBeFalse = service.addTask(testName);
    expect(service.tasks.length).toEqual(expectedLength); 
    expect(service.tasks[service.tasks.length - 1].name).toBe(testName);
    expect(shouldBeFalse).toBe(false);
  }));

  it('should handle removing tasks, returning true or false', inject([TaskService], (service: TaskService) => {
    let oldLength = service.tasks.length;
    let testName = 'ServiceSpecTest';
    let finder = (task) => task.name === testName;
    service.addTask(testName);
    expect(service.tasks.find(finder)).toBeTruthy();

    let shouldBeTrue = service.removeTask(testName);
    expect(service.tasks.find(finder)).toBeFalsy();
    expect(service.tasks.length).toEqual(oldLength)
    
    let shouldBeFalse = service.removeTask(testName);
    expect(service.tasks.find(finder)).toBeFalsy();
    expect(service.tasks.length).toEqual(oldLength);
  }));

  it('should handle fetching tasks from server', inject([TaskService], (service: TaskService) => {
    // When server is hooked up, finish this out
  }));

});
