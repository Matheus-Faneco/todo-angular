import {Component} from '@angular/core';
import { Task } from '../../models/task';
import {TaskService} from '../../services/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task: Task = {
    title: '',
    description: '',
    responsible: '',
    priority: '',
  }

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}


  createTask(){
    this.taskService.postTask(this.task).subscribe({
      next: (newTask) => {
        console.log("Nova tarefa criada:", newTask);
        this.task = newTask;
        }
      })
    this.router.navigate(['/home']);
    }
}
