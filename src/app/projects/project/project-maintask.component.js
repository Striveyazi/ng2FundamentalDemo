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
var Task = (function () {
    function Task() {
    }
    return Task;
}());
var ProjectMainTaskComponent = (function () {
    function ProjectMainTaskComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ProjectMainTaskComponent.prototype.isSelected = function (task) {
        return task.Id === this.selectedId;
    };
    ProjectMainTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.selectedId = params['Id'];
            _this.tasks = [
                { Id: 1, Title: "任务大大1号", Description: "test" },
                { Id: 2, Title: "任务小小2号", Description: "test" }
            ];
        });
    };
    ProjectMainTaskComponent.prototype.onSelect = function (task) {
        this.selectedId = task.Id;
        // Navigate with relative link
        this.router.navigate([task.Id], { relativeTo: this.route });
    };
    ProjectMainTaskComponent = __decorate([
        core_1.Component({
            template: "\n  <div>\n    <p>\u9879\u76EE\u4EFB\u52A1\u677F</p>\n  </div>\n  <div>\n      <ul class=\"items\">\n        <li *ngFor=\"let task of tasks\"\n          [class.selected]=\"isSelected(task)\"\n          (click)=\"onSelect(task)\">\n          <span class=\"badge\">{{task.Id}}</span> {{task.Title}}\n        </li>\n      </ul>\n      <router-outlet></router-outlet>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ProjectMainTaskComponent);
    return ProjectMainTaskComponent;
}());
exports.ProjectMainTaskComponent = ProjectMainTaskComponent;
//# sourceMappingURL=project-maintask.component.js.map