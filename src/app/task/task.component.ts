import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { Task } from './task.model';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task! : Task
  @Output() complete = new EventEmitter()

  private taskService = new TaskService()

  constructor(taskService: TaskService) {
    this.taskService = taskService
  }

  onComplete() {
    this.taskService.removeTask(this.task.id)
  }
}
