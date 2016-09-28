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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var icon_2 = require('@angular2-material/icon');
var sidenav_1 = require('@angular2-material/sidenav');
var grid_list_1 = require('@angular2-material/grid-list');
var toolbar_1 = require('@angular2-material/toolbar');
var tabs_1 = require('@angular2-material/tabs');
var list_1 = require('@angular2-material/list');
var alumno_service_1 = require('./alumnos/shared/alumno.service');
var alumno_ficha_component_1 = require('./alumnos/alumno-ficha/alumno-ficha.component');
var angular2_google_chart_1 = require('angular2-google-chart/angular2-google-chart');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                angular2_google_chart_1.Angular2GoogleChartModule,
                card_1.MdCardModule,
                button_1.MdButtonModule,
                icon_1.MdIconModule,
                sidenav_1.MdSidenavModule,
                grid_list_1.MdGridListModule,
                toolbar_1.MdToolbarModule,
                tabs_1.MdTabsModule,
                list_1.MdListModule
            ],
            declarations: [
                app_component_1.AppComponent,
                alumno_ficha_component_1.AlumnoFichaComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [icon_2.MdIconRegistry, alumno_service_1.AlumnoService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map