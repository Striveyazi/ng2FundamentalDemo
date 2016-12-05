import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { WpGlobalStateService } from '../../service/app/wp-global-state.service'
import { GetProjectTasks } from '../../service/project/getProjectTasks';

class Task {
  Id: string;
  Title: string;
  Description: string;
}

@Component({
  template: `
  <div>
    <p>项目任务板</p>
  </div>
  <div class="layout-main">
    <div class="panel-main">
        <TreeContainer [trees]="taskbags">
        </TreeContainer>
    </div>
  </div>
  `
})
/* 三级组件 */
export class ProjectMainTaskComponent implements OnInit {
  tasks: Task[];
  public selectedId: string;
  test:string;
  taskbags:any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private GetProjectTasks:GetProjectTasks,
    private wpGlobalStateService:WpGlobalStateService
  ) {
     setTimeout(() => {
            // this.trees = [{
            //     nodes: this.nodes,
            //     options: this.customTemplateStringOptions
            // },{
            //     nodes:secondnodes,
            //     options: this.customTemplateStringOptions
            // }]
            this.taskbags =[];
            for(let i=0;i<10;i++){
                let childId_1 = (Math.floor(Math.random() * 10000000000000)).toString();
                let obj = {
                pid: "first",
                bag_id: childId_1,
                name: childId_1,
                pos: 100+i,
                children:[],
                children_ids:[],
                children_manhour:0,
                children_completedmanhour:0,
            }
            this.taskbags.push(obj);
            }
        }, 0, () => {
            console.log("initial trees data");
        });
      wpGlobalStateService.Rxjs_Subject_Test$.subscribe(
        value=>{
          this.test = value;
        }
      );
      
      this.wpGlobalStateService.setTestValue('test');
  }

  isSelected(task: Task) {
    return task.Id === this.selectedId;
  }

  ngOnInit() {
      this.selectedId  = this.wpGlobalStateService.getActivatedRouteSegment();

      this.tasks =  this.GetProjectTasks.getProjectTasks(this.selectedId);
      console.log('return:' ,this.tasks );

  }

  onSelect(task: Task) {
    this.selectedId = task.Id;

    // Navigate with relative link
    this.router.navigate([task.Id],{ relativeTo: this.route });
  }
}