import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-list/task-detail/task-detail.component';

import { TaskService } from './task-list/services/task.service';
import { TaskAddComponent } from './task-list/task-add/task-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
