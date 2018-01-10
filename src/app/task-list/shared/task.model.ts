export class Task {
  name: string
  completed: boolean

  constructor(name: string) {
    this.name = name;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
};