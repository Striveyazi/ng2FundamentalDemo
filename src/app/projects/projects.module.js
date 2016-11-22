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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var project_module_1 = require('./project/project.module');
var project_component_1 = require('./project/project.component');
var projects_component_1 = require('./projects.component');
var projects_list_component_1 = require('./projects-list.component');
var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                project_module_1.ProjectModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: projects_component_1.ProjectsComponent,
                        children: [{
                                path: 'projects',
                                component: projects_list_component_1.ProjectsListComponent
                            },
                            {
                                path: 'project/:Id',
                                component: project_component_1.ProjectComponent
                            }]
                    }
                ])
            ],
            declarations: [
                projects_component_1.ProjectsComponent,
                projects_list_component_1.ProjectsListComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map