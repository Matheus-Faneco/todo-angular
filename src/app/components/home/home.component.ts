import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  tasks: Task[] = []

  constructor(
    private taskService: TaskService,
  ){}

  deleteTask(taskId: number | undefined) {
    this.taskService.deleteTask(taskId!).subscribe({
      next: () => console.log("Tarefa removida"),
    })
    window.location.reload();
  }


  ngOnInit() {

    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
    })
  }

}
