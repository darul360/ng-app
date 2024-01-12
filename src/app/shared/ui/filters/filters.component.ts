import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounce, debounceTime, filter, tap } from 'rxjs';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @ViewChild('f') form!:NgForm;
  @Input() controls : string [] = [];
  @Output() ev:EventEmitter<any> = new EventEmitter();

  constructor(){
  }

  ngAfterViewInit(): void{
    this.form.valueChanges?.pipe(
      filter(val => {
        if (JSON.stringify(val).includes('dupa')) {
          alert('sam jesteś dupa');
          return false;
        }
        return true;
      }),
      tap(val => {
        console.log(val);
      }),
      /* map(val => {
        return { ...val, date: Date.now() }
      }) */
      debounceTime(500)
    )
      .subscribe(value => {
        console.log(value);
        this.ev.emit(value);
      })
  }
}
