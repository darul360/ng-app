import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/util/custom-validators';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form:any;
  constructor(
    private fb: FormBuilder
  ){
    this.form = fb.group({
      username: ['Łukasz', [Validators.required]],
      birthdate:[null,[Validators.required,CustomValidators.shouldBePassed]],
      hobbies: new FormGroup({
        music: new FormControl(false),
        tv: new FormControl(false),
        box: new FormControl(false),
        mma: new FormControl(false)
      }, CustomValidators.atLeatsOneShouldBeSelected)

    })
    this.form.controls.hobbies.addControl('xyz', new FormControl(false))





  }
}
