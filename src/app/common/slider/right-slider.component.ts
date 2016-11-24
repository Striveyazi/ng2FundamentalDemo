import { Component,ViewEncapsulation } from '@angular/core';

@Component({
    selector:'right-slider',
    encapsulation:ViewEncapsulation.None,
    template:`
        <div>
            <nav class='sliderNav'>
            </nav>
            <div>滑块<div>
        </div>
        <router-outlet></router-outlet>
    `
})
export class RightSlider {

}