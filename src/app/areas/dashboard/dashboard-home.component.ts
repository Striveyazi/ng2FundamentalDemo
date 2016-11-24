import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector:'my-voter',
  template: `
  <div>
    <!--<p>我的任务面板</p>-->
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
  </div>
  `
})
/* 三级组件 */
export class DashBoardHomeComponent {
    @Input() major: number;
    @Input() minor: number;
    @Input() name:string;
    @Output() onVoted = new EventEmitter<boolean>();
    changeLog: string[] = [];

    voted = false;
				
    vote(agreed: boolean) {
      this.onVoted.emit(agreed);
      this.voted = true;
    }
 }