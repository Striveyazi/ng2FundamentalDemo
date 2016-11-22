"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DashBoardComponent = (function () {
    function DashBoardComponent() {
    }
    DashBoardComponent = __decorate([
        core_1.Component({
            template: "\n\t<div class=\"ml50\">\n    <nav class=\"header-nav\">\n\t\t\t<div class=\"headernav-left fl\">\n\t\t\t\t<a class=\"proj-icon fl\"><i class=\"\"></i></a>\n\t\t\t\t <div class=\"title fl\">\n\t\t\t\t \tproject name\n\t\t\t\t </div>\n\t\t\t\t <a class=\"set-icon fl\"><i class=\"\"></i></a>\n\t\t\t\t <span class=\"time\">55\u592911\u65F611\u520612\u79D2</span>\n\t\t\t</div>\n\t\t\t<div class=\"headernav-right fr\">\n\t\t\t\t<span class=\"calender\">\n\t\t\t\t\t\u65E5\u5386\n\t\t\t\t</span>\n\t\t\t\t<span class=\"showmenu\">\n\t\t\t\t\t\u83DC\u5355\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"headernav-cont\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a routerLink=\"/dashboard\" routerLinkActive=\"active\">\u6211\u7684\u4EFB\u52A1</a></li>\n\t\t\t\t\t<li><a routerLink=\"/calendar\" routerLinkActive=\"active\">\u65E5\u7A0B</a></li>\n\t\t\t\t\t<li><a routerLink=\"/note\" routerLinkActive=\"active\">\u7B14\u8BB0</a></li>\n\t\t\t\t\t<li><a href='javascript:;'>\u90AE\u4EF6</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n    <router-outlet></router-outlet>\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map