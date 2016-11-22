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
var project_component_1 = require('./project.component');
var project_maintask_component_1 = require('./project-maintask.component');
var project_bugs_component_1 = require('./project-bugs.component');
var project_topics_component_1 = require('./project-topics.component');
var project_member_component_1 = require('./project-member.component');
var project_task_detail_component_1 = require("./project-task-detail.component");
var ProjectRoutingModule = (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: 'project/:Id',
                        component: project_component_1.ProjectComponent,
                        children: [
                            {
                                path: 'Task',
                                component: project_maintask_component_1.ProjectMainTaskComponent,
                                children: [
                                    {
                                        path: ':Id',
                                        component: project_task_detail_component_1.ProjectTaskDetalComponent
                                    },
                                    {
                                        path: ''
                                    }
                                ]
                            },
                            {
                                path: 'Bug',
                                component: project_bugs_component_1.ProjectBugsComponent
                            },
                            {
                                path: 'Topic',
                                component: project_topics_component_1.ProjectTopicsComponent
                            },
                            {
                                path: 'Member',
                                component: project_member_component_1.ProjectMemberComponent
                            }
                        ]
                    },
                    {
                        path: 'project/:Id',
                        redirectTo: 'project/:Id/Task',
                        pathMatch: 'full'
                    },
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());
exports.ProjectRoutingModule = ProjectRoutingModule;
//# sourceMappingURL=project-routing.module.js.map