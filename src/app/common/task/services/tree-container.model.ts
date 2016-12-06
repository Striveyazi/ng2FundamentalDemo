import { Task } from '../entities/task.entity';
import { TreeModel } from './tree.model';
import { Injectable } from '@angular/core';
import { ITreeContainer } from '../defs/api';
import { TreeNode } from './tree-node.model';
import { TreeOptions } from './tree-options.model';



@Injectable()
export class TreeContainer {
    _dragTask:Task;
    _dragTaskComponent:any;
    _isFirstInit:boolean;
}