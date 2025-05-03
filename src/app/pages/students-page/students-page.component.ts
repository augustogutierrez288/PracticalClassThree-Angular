import { Component } from '@angular/core';
import { IStudent } from '../../models';
import { StudentListComponent } from '../../components/student-list/student-list.component';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from '../../components/student-form/student-form.component';

@Component({
  selector: 'app-students-page',
  imports: [CommonModule, StudentListComponent, StudentFormComponent],
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {
  approvedStudents: IStudent[] = [
    {
      id: 1,
      name: 'Carlos',
      surname: 'Magno'
    },
    {
      id: 2,
      name: 'Alejandro',
      surname: 'Aristoteles'
    },
    {
      id: 3,
      name: 'Uncos',
      surname: 'Mercurio'
    },
    {
      id: 4,
      name: 'Lirio',
      surname: 'Mirio'
    }
  ];
  failingStudents: IStudent[] = [
    {
      id: 5,
      name: 'Hector',
      surname: 'Mero'
    },
    {
      id: 6,
      name: 'Mica',
      surname: 'Sanchez'
    },
    {
      id: 7,
      name: 'Yael',
      surname: 'Cristaldo'
    },
    {
      id: 8,
      name: 'Merio',
      surname: 'Momo'
    }
  ];
  absentStudents: IStudent[] =[
    {
      id: 9,
      name: 'Lolo',
      surname: 'Verduc'
    },
    {
      id: 10,
      name: 'Lucila',
      surname: 'Quemera'
    },
    {
      id: 11,
      name: 'Mirta',
      surname: 'Mirna'
    },
    {
      id: 12,
      name: 'Micaela',
      surname: 'Casapan'
    }
  ];

  OnDeleteAprobado(student: IStudent):void{
    this.approvedStudents = this.approvedStudents.filter( (e) => e.id !== student.id )
  }

  OnDeleteDesaprobado(student: IStudent):void{
    this.failingStudents = this.failingStudents.filter( (e) => e.id !== student.id )
  }

  OnDeleteAusente(student: IStudent):void{
    this.absentStudents= this.absentStudents.filter( (e) => e.id !== student.id )
  }
}
