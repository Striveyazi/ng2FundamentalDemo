import { Component, Input, TemplateRef } from '@angular/core'

@Component({
  selector: 'task-loading',
  template: `<span *ngIf="!loadingTemplate">loading...</span>
  <template [ngTemplateOutlet]="loadingTemplate"></template>`,
})
export class TaskLoadingComponent {
  @Input() loadingTemplate: TemplateRef<any>;
}
