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
var ProjectComponent = (function () {
    function ProjectComponent() {
    }
    ProjectComponent = __decorate([
        core_1.Component({
            template: "\n\t<div class=\"ml50\">\n    <nav class=\"header-nav\">\n        <div class=\"headernav-left fl\">\n            <a class=\"proj-icon fl\"><i class=\"\"></i></a>\n                <div class=\"title fl\">\n                project name\n                </div>\n                <a class=\"set-icon fl\"><i class=\"\"></i></a>\n                <span class=\"time\">55\u592911\u65F611\u520612\u79D2</span>\n        </div>\n        <div class=\"headernav-right fr\">\n            <span class=\"calender\">\n                \u65E5\u5386\n            </span>\n            <span class=\"showmenu\">\n                \u83DC\u5355\n            </span>\n        </div>\n        <div class=\"headernav-cont\">\n            <ul>\n                <li><a routerLink=\"Task\" routerLinkActive=\"active\">MainTask</a></li>\n                <li><a routerLink=\"Bug\" routerLinkActive=\"active\">Bugs</a></li>\n                <li><a routerLink=\"Topic\" routerLinkActive=\"active\">Topic</a></li>\n                <li><a href='javascript:;'>Member</a></li>\n            </ul>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map