import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';

import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdListModule } from '@angular2-material/list';

import { AlumnoService } from './alumnos/shared/alumno.service'

import { AlumnoFichaComponent }   from './alumnos/alumno-ficha/alumno-ficha.component';

import { Angular2GoogleChartModule } from 'angular2-google-chart/angular2-google-chart';


@NgModule({
  imports:      [
    BrowserModule,
    Angular2GoogleChartModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdGridListModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule
  ],
  declarations: [
    AppComponent,
    AlumnoFichaComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ MdIconRegistry, AlumnoService ]
})

export class AppModule { }
