import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WpGlobalStateService{
    //todo so many object waiting to add here(what a huge object!)
    // private ActivatedRouteSegment = new Subject<string>();

    // ActivatedRouteSegment$ = this.ActivatedRouteSegment.asObservable();

    private ActivatedRouteSegment:string;

    setActivatedRouteSegment(segment:string){
        this.ActivatedRouteSegment = segment;
    }
    getActivatedRouteSegment(){
        return this.ActivatedRouteSegment;
    }
}