import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { store } from '@angular/core/src/render3';

@Component({
  selector: 'app-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit, OnDestroy {

  oTask: Task;
  aTasks: Array<Task>; 

  constructor() { }

  ngOnInit() {
    this.oTask = new Task();
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    this.aTasks = storedTasks ? storedTasks : [];
  }

  addTask() {
    this.aTasks.push(Object.assign({}, this.oTask));
    // this.storeTask();
    this.oTask.name = '';
    this.logTasksArray();
  }

  deleteTask(i) {
    this.aTasks.splice(i, 1);
    // this.storeTask();
    this.logTasksArray();
  }

  ngOnDestroy() {
    this.storeTask();
  }

  private storeTask() {
    const storedTasks = JSON.stringify(this.aTasks);
    localStorage.setItem('tasks', storedTasks);    
  }

  private logTasksArray() {
    console.log(this.aTasks);
  }
}
