import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-edit',
  standalone: false,
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {

  taskId: number = 0
  taskEdited: Task = {
    id: 0,
    title: '',
    description: '',
    responsible: '',
    priority: ''
  }

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }


  ngOnInit() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTask()
  }

  loadTask(){
    this.taskService.getTask(this.taskId).subscribe({
      next: (task: Task) => {
        this.taskEdited = task;
      }
    })
  }

  editTask() {
    this.taskService.updateTask(this.taskId, this.taskEdited).subscribe({
      next: (newTask: Task) => {
        console.log("editado com sucesso", newTask);
      }
    })
    this.router.navigate(['/home']);
  }

}
