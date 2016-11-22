import { Component,ViewEncapsulation } from '@angular/core';

@Component({
    selector:"search-project",
    encapsulation: ViewEncapsulation.None,
    template:`
        <div>
            <input value='我是项目页面的搜索滑块'/>
            <a routerLink='./search'>去搜索页面</a> 
        </div>
    `
})

export class SearchProject{

}