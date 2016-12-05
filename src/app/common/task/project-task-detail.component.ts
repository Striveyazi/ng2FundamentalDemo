import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
//import { TaskEditorComponent } from '../editor/task-editor.component';
import { FileUploader } from 'ng2-file-upload';

@Component({
  styleUrls: [
    '../../../assets/css/TaskDetail.css'
  ],
  templateUrl:'../../../assets/view/common/task/task-detail.html' 
})
/* 三级组件 */
export class ProjectTaskDetalComponent {
  public uploader: FileUploader = new FileUploader({});
 }