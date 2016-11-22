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
var router_1 = require('@angular/router');
var Project = (function () {
    function Project() {
    }
    return Project;
}());
var ProjectsListComponent = (function () {
    function ProjectsListComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ProjectsListComponent.prototype.isSelected = function (project) {
        return project.Id === this.selectedId;
    };
    ProjectsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.selectedId = params['Id'];
            _this.projects = [
                { Id: 1, Title: "我的项目1号", Description: "test" },
                { Id: 2, Title: "我的项目2号", Description: "test" }
            ];
        });
    };
    ProjectsListComponent.prototype.onSelect = function (project) {
        this.selectedId = project.Id;
        // Navigate with relative link
        this.router.navigate(["project", project.Id]);
    };
    ProjectsListComponent = __decorate([
        core_1.Component({
            template: "\n  <div>\n      <ul class=\"items\">\n        <li *ngFor=\"let project of projects\"\n          [class.selected]=\"isSelected(project)\"\n          (click)=\"onSelect(project)\">\n          <span class=\"badge\">{{project.Id}}</span> {{project.Title}}\n        </li>\n      </ul>\n      <router-outlet></router-outlet>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projects-list.component.js.map