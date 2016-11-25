import { Injectable } from '@angular/core';

@Injectable()
export class GetProjectTasks{
    getProjectTasks(id:number|string){
        console.log('param id:',id);
        if(id === 1){
            return [{ Id: 1, Title: "任务1大大1号", Description: "test" },
                    { Id: 2, Title: "任务1小小2号", Description: "test" }]
        }else{
            return [{ Id: 1, Title: "任务2大大1号", Description: "test" },
                    { Id: 2, Title: "任务2小小2号", Description: "test" }]
        }
    }
}