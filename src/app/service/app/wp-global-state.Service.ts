import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WpGlobalStateService{
    //todo so many object waiting to add here(what a huge object!)
    // private ActivatedRouteSegment = new Subject<string>();

    // ActivatedRouteSegment$ = this.ActivatedRouteSegment.asObservable();

    
    //静态变量方法
    private ActivatedRouteSegment:string;
    setActivatedRouteSegment(segment:string){
        this.ActivatedRouteSegment = segment;    
    }
    getActivatedRouteSegment(){
        return this.ActivatedRouteSegment;
    }

    //Subject管道
    private Rxjs_Subject_Test = new Subject<string>();
    Rxjs_Subject_Test$ = this.Rxjs_Subject_Test.asObservable();

    setTestValue(value:string){
        let x = this.Rxjs_Subject_Test;
        this.Rxjs_Subject_Test.next(value);
        setTimeout(function() {
            x.next(value+' hello world');
        }, 5000); 
    }
    
}