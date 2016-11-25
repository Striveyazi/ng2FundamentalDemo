import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ActivatedRouteService{
    private ActivatedRouteSegment:string;

    //ActivatedRouteSegment$ = this.ActivatedRouteSegment.asObservable();

    setActivatedRouteSegment(segment:string){
        this.ActivatedRouteSegment = segment
    }
    getActivatedRouteSegment(){
        return this.ActivatedRouteSegment;
    }
}