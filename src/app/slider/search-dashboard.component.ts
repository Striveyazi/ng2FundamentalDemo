import { Component,ViewEncapsulation } from '@angular/core';

@Component({
    selector:"search-dashboard",
    encapsulation: ViewEncapsulation.None,
    template:`
        <div>
            <input value='我是工作台的搜索滑块'/>
            <a routerLink='./search'>去搜索页面</a> 
        </div>
    `
})

export class SearchDashBoard{

}