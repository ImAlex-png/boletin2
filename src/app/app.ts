import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Direccion } from './model/direccion';
import { FormsModule } from '@angular/forms';
import { Alumno } from './model/alumno';
import { Profesor } from './model/profesor';
import { Asignatura } from './model/asignatura';
import { Matricula } from './model/matricula';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin2');

  public direccion: Direccion = new Direccion(1, "41520", "Sevilla", "El Viso del Alcor", "Sevilla");

  public direccion2: Direccion = new Direccion(2, "41520", "Sevilla", "El Viso del Alcor", "Sevilla");

  //Alumnos
  public alumno = new Alumno("dni", "Alejandro", "Jimenez Carballar", new Date(), this.direccion);
  public alumno2 = new Alumno("dniSalva", "Salvador", "Peinado Conceicao", new Date(), this.direccion2);

  //Profesor
  public profesor = new Profesor("dniProfe1", "Octavio", "Montero Oliva", "123456789", 1200);
  public profesor2 = new Profesor("dniProfe2", "Jesus", "Pepe pepesito", "987654321", 2500);

  //Asignatura
  public asignatura = new Asignatura("DAWEB", "Cositas de DAWEB", 300, this.profesor);
  public asignatura2 = new Asignatura("DIW", "Interfaces", 450, this.profesor2);

  //Matriculas
  public matricula = new Matricula(this.alumno, this.asignatura, 10, 8, 8);
  public matricula2 = new Matricula(this.alumno2, this.asignatura2, 7, 6, 5);
  public matricula3 = new Matricula(this.alumno, this.asignatura2, 7, 8, 1);
  public matricula4 = new Matricula(this.alumno2, this.asignatura, 5, 4, 6);

  // Se crea un array con las matriculas
  public matriculas : Matricula[] = [this.matricula, this.matricula2, this.matricula3, this.matricula4];

  // public matriculaJson = JSON.stringify(this.matriculas);

  public getAlumnos() : Alumno[] {
    let alumnosDistintos : Alumno[] = [];
    for(let i : number = 0; i < this.matriculas.length; i++){
      alumnosDistintos.push(this.matriculas[i].alumno);
    }
    let setAlumnos : Set<Alumno> = new Set<Alumno>(alumnosDistintos);

    alumnosDistintos = [...setAlumnos];

    //Otra forma
    // alumnosDistintos = Array.from(new Set(alumnosDistintos))
    return alumnosDistintos;
  }

  public getAsignaturaByAlumno(dni: string){
    let matriculas : Matricula[] = [];
    for(let i = 0; i < this.matriculas.length; i++){
      if(this.matriculas[i].alumno.dni == dni){
        matriculas.push(this.matriculas[i]);
      }
    }
  }
  
}
