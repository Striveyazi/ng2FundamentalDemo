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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var dashboard_component_1 = require('./dashboard.component');
var dashboard_home_component_1 = require('./dashboard-home.component');
var dashboard_calendar_component_1 = require('./dashboard-calendar.component');
var dashboard_note_component_1 = require('./dashboard-note.component');
var dashboard_routing_module_1 = require('./dashboard-routing.module');
var DashBoardModule = (function () {
    function DashBoardModule() {
    }
    DashBoardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                dashboard_routing_module_1.DashBoardRoutingModule
            ],
            declarations: [
                dashboard_component_1.DashBoardComponent,
                dashboard_home_component_1.DashBoardHomeComponent,
                dashboard_calendar_component_1.DashBoardCalendarComponent,
                dashboard_note_component_1.DashBoardNoteComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], DashBoardModule);
    return DashBoardModule;
}());
exports.DashBoardModule = DashBoardModule;
//# sourceMappingURL=dashboard.module.js.map