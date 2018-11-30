import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';
import { AboutModule } from './about/about.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { BlogModule } from './blog/blog.module';
import { CursosComponent } from './cursos/cursos.component';
import { FormTdComponent } from './cursos/form-td/form-td.component';
import { FormMdComponent } from './cursos/form-md/form-md.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LibrosModule } from './libros/libros.module';

// the second parameter 'es' is optional
registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    FormTdComponent,
    FormMdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    TareasModule,
    AboutModule,
    BlogModule,
    FontAwesomeModule,
    LibrosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
