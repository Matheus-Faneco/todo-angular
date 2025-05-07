import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'http://localhost:8000/api/task/';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.taskUrl);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.taskUrl}${id}`);
  }

  postTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.taskUrl, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.taskUrl}${id}/`, task);
  }


  deleteTask(id: number): Observable<any>{
    return this.http.delete<Task>(`${this.taskUrl}${id}/`);
  }


}
