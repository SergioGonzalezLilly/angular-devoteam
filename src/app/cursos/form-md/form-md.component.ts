import { Component, OnInit } from '@angular/core';
import { Turno, Curso, Alumno } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dvt-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {
  aTurnos: Array<Turno>;
  aCursos: Array<Curso>;
  form: FormGroup;
  oAlumno: Alumno;

 constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.aTurnos = TURNOS;
    this.aCursos = CURSOS;
    this.form = this.formBuilder.group({
      nombre:    [ '', [Validators.required, Validators.minLength(2)] ],
      apellidos: [],
      email:     [ '', [Validators.required, Validators.email]],
      isOk:      [false],
      turno:     [{id: '', nombre: '', horario: ''}, Validators.required],
      curso:     [{id: '', nombre: '', descripcion: ''}, Validators.required]
    });

    console.log(this.form);
  } // /ngOnInit()

  enviar(ev) {
    console.log(ev);
    ev.preventDefault();
    // TODO: sustituir console.log() por el envío real al API
    this.oAlumno = Object.assign({}, this.form.value);
  }

  public get nombre() { return this.form.get('nombre'); }
  public get apellidos() { return this.form.get('apellidos'); }
  public get email() { return this.form.get('email'); }
  public get isOk() { return this.form.get('isOk'); }
  public get turno() { return this.form.get('turno'); }
  public get curso() { return this.form.get('curso'); }

}
