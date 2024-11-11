import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { User } from '../user/user.model';
import { Task } from '../task/task.model';
import { TaskService } from './tasks.service';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) selectedUser!: User
  isVisible : boolean = false

  private taskService = new TaskService()

  constructor(taskService: TaskService){
    this.taskService = taskService
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.selectedUser.id)
  }

  onComplete(taskId: string) {
    return this.taskService.removeTask(this.selectedUser.id)
  }

  onAddButtonClick() {
    this.isVisible = true
  }

  onCloseAddTask() {
    this.isVisible = false
  }
}
