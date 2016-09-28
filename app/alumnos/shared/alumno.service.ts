import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlumnoService {
  private alumnosUrl = 'http://localhost:8000/api/alumnos.json';  // URL to web api
  private alumnosUrlTest = 'http://localhost:8000/api/alumnos/2.json';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  getAlumnos() {
    return this.http.get(this.alumnosUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getAlumnoTest() {
    return this.http.get(this.alumnosUrlTest)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getAlumno(id: number) {
    return this.getAlumnos().then(alumnos => alumnos.find(alumno => alumno.id === id));
  }

}
