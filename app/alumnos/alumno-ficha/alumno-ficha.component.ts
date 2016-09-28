import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../shared/alumno.service'


@Component({
    selector: 'satd-app',
    templateUrl: 'app/alumnos/alumno-ficha/alumno-ficha.component.html',
    styleUrls: [ 'app/alumnos/alumno-ficha/alumno-ficha.component.css', 'app/alumnos/shared/css/material-table.css' ]
})

export class AlumnoFichaComponent implements OnInit {

    alumnos;
    alumno;
    historialMatriculas;

    line_ChartData;
    
    public line_ChartOptions = {
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    constructor(private alumnoService: AlumnoService){ }

    calcularIndicadores(alumno): void {
      this.alumno = alumno;
      let matriculas = this.alumno.matriculas;
      let historialMatriculas = {};

      matriculas = matriculas.forEach(
        a => {
          if(historialMatriculas[a.periodo] === undefined){
            historialMatriculas[a.periodo] = {
              periodo: a.periodo,
              asistencia: a.atributos_matricula.asistencia,
              morosidad: a.atributos_matricula.morosidad,
              promedio: a.atributos_matricula.promedio,
              estado: a.estado
            };
          }
        }
      );

      this.historialMatriculas = Object.keys(historialMatriculas).map(key => historialMatriculas[key])
        .sort((a, b) => {
          if (a.periodo < b.periodo)
            return -1;
          if (a.periodo > b.periodo)
            return 1;
          return 0;
        }
      );

      this.line_ChartData = [ ['Período', 'Asistencia', 'Morosidad'] ];

      this.historialMatriculas.forEach(a => {
        this.line_ChartData.push([a.periodo, a.asistencia, a.morosidad]);
      });

      console.log(this.line_ChartData);
    }

    ngOnInit(): void {
      // this.alumnoService.getAlumnos().then(alumnos => this.alumnos = alumnos);
      this.alumnoService.getAlumnoTest().then(alumno => this.calcularIndicadores(alumno));
    }

}