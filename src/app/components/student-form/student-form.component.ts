import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  studentForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  OnSubmit():void{
    if(this.studentForm.invalid){
      alert('Formulario invalido');
    }else{
      console.log(this.studentForm.value)
    }
  }

  passwordIsInvalid(){
    return(
      this.studentForm.get('password')?.invalid && 
      this.studentForm.get('password')?.touched
    )
    
  }
  passwordIsValid(){
    return(
      this.studentForm.get('password')?.valid && 
      this.studentForm.get('password')?.touched
    )
  }
  passwordHasRequiredError(){
    return this.studentForm.get('password')?.hasError('required');
  }
  passwordHasmMinLengthError(){
    return this.studentForm.get('password')?.hasError('minlength');
  }
  emailIsInvalid(){
    return(
      this.studentForm.get('email')?.invalid && 
      this.studentForm.get('email')?.touched
    )
  }
  emailIsValid(){
    return(
      this.studentForm.get('email')?.valid && 
      this.studentForm.get('email')?.touched
    )
  }
}