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
var alumno_service_1 = require('../shared/alumno.service');
var AlumnoFichaComponent = (function () {
    function AlumnoFichaComponent(alumnoService) {
        this.alumnoService = alumnoService;
        this.line_ChartOptions = {
            curveType: 'function',
            legend: { position: 'bottom' }
        };
    }
    AlumnoFichaComponent.prototype.calcularIndicadores = function (alumno) {
        var _this = this;
        this.alumno = alumno;
        var matriculas = this.alumno.matriculas;
        var historialMatriculas = {};
        matriculas = matriculas.forEach(function (a) {
            if (historialMatriculas[a.periodo] === undefined) {
                historialMatriculas[a.periodo] = {
                    periodo: a.periodo,
                    asistencia: a.atributos_matricula.asistencia,
                    morosidad: a.atributos_matricula.morosidad,
                    promedio: a.atributos_matricula.promedio,
                    estado: a.estado
                };
            }
        });
        this.historialMatriculas = Object.keys(historialMatriculas).map(function (key) { return historialMatriculas[key]; })
            .sort(function (a, b) {
            if (a.periodo < b.periodo)
                return -1;
            if (a.periodo > b.periodo)
                return 1;
            return 0;
        });
        this.line_ChartData = [['Período', 'Asistencia', 'Morosidad']];
        this.historialMatriculas.forEach(function (a) {
            _this.line_ChartData.push([a.periodo, a.asistencia, a.morosidad]);
        });
        console.log(this.line_ChartData);
    };
    AlumnoFichaComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.alumnoService.getAlumnos().then(alumnos => this.alumnos = alumnos);
        this.alumnoService.getAlumnoTest().then(function (alumno) { return _this.calcularIndicadores(alumno); });
    };
    AlumnoFichaComponent = __decorate([
        core_1.Component({
            selector: 'satd-app',
            templateUrl: 'app/alumnos/alumno-ficha/alumno-ficha.component.html',
            styleUrls: ['app/alumnos/alumno-ficha/alumno-ficha.component.css', 'app/alumnos/shared/css/material-table.css']
        }), 
        __metadata('design:paramtypes', [alumno_service_1.AlumnoService])
    ], AlumnoFichaComponent);
    return AlumnoFichaComponent;
}());
exports.AlumnoFichaComponent = AlumnoFichaComponent;
//# sourceMappingURL=alumno-ficha.component.js.map