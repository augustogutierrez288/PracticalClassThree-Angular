import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../models';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  @Input()
  data: IStudent[] = [];

  // @Output()
  // DeteleStudent(student: IStudent):void{
  //   this.data = this.data.filter((e) => e.id !== student.id )
  // }

  @Output()
  delete = new EventEmitter();
  
}
