import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import { Task } from '../../models/task';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  message!: "Usuário não autorizado";
  tasks: Task[] = []

  constructor(
    private taskService: TaskService,
    private userService: UserService
  ){}

  deleteTask(taskId: number | undefined) {
    this.taskService.deleteTask(taskId!).subscribe({
      next: () => console.log("Tarefa removida"),
    })
    window.location.reload();
  }


  ngOnInit() {
    this.userService.checkUser({
      withCredentials: true
    }).subscribe(res => {
      console.log(res);
    },
      err => console.log(err)
      )

    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
    })
  }

}
