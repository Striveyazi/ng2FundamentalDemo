import { Component,Input,Output,EventEmitter} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector:'my-voter',
  template: `
  <div>
    <p>我的任务面板</p>
    <div ng2FileDrop
        [ngClass]="{'nv-file-over': hasBaseDropZoneOver}"
        (fileOver)="fileOverBase($event)" [uploader]="uploader" ></div>
        Multiple
    <input type="file" ng2FileSelect [uploader]="uploader" multiple  /><br/>
  </div>
  `
})
/* 三级组件 */
export class DashBoardHomeComponent {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
    public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
}