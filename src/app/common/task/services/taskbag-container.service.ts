import { Task } from '../entities/task.entity';
import { Injectable } from '@angular/core';



@Injectable()
export class MainTaskContainer {
    _dragTask:Task;
    _dragTaskComponent:any;
    _isFirstInit:boolean;
}