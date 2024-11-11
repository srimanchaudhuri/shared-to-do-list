import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle?: string;
  enteredSummary?: string;
  enteredDate?: string;

  private taskService = new TaskService();

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    if (
      this.enteredSummary !== undefined &&
      this.enteredTitle !== undefined &&
      this.enteredDate !== undefined
    ) {
      this.taskService.addTask(
        {
          title: this.enteredTitle || '',
          summary: this.enteredSummary || '',
          dueDate: this.enteredDate || '',
        },
        this.userId
      );
    }
    else
    {
      alert("Incorrect Inputs")
    }

    this.close.emit()
  }
}
