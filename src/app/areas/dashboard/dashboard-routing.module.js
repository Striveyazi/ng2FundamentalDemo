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
var dashboard_component_1 = require('./dashboard.component');
var dashboard_home_component_1 = require('./dashboard-home.component');
var dashboard_calendar_component_1 = require('./dashboard-calendar.component');
var dashboard_note_component_1 = require('./dashboard-note.component');
var DashBoardRoutingModule = (function () {
    function DashBoardRoutingModule() {
    }
    DashBoardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: dashboard_component_1.DashBoardComponent,
                        children: [
                            {
                                path: 'dashboard',
                                component: dashboard_home_component_1.DashBoardHomeComponent
                            },
                            {
                                path: 'calendar',
                                component: dashboard_calendar_component_1.DashBoardCalendarComponent
                            },
                            {
                                path: 'note',
                                component: dashboard_note_component_1.DashBoardNoteComponent
                            }
                        ]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashBoardRoutingModule);
    return DashBoardRoutingModule;
}());
exports.DashBoardRoutingModule = DashBoardRoutingModule;
//# sourceMappingURL=dashboard-routing.module.js.map