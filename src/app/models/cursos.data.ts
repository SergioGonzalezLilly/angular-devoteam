import { Curso, Turno } from './alumno.model'

export const CURSOS: Array<Curso> = [
    {id: 'A', nombre: 'Angular', descripcion: 'Angular 7 Avanzado'},
    {id: 'R', nombre: 'React', descripcion: 'React Básico'},
    {id: 'V', nombre: 'Vue', descripcion: 'Introducción a Vue'}
];

export const TURNOS: Array<Turno> = [
    {id: '01', nombre: 'Mañana', horario: '9:00-13:00'},
    {id: '02', nombre: 'Tarde', horario: '15:00-19:00'},
    {id: '03', nombre: 'Noche', horario: '18:00-22:00'}
];
