import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action, GridDataModel } from '../../util/types';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatInputModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() data!:any[];
  @Input() config!:GridDataModel<any>[];
  @Output() gridAction : EventEmitter<Action> = new EventEmitter();
  onClick(payload:string,type:any){
    console.log(payload,type);
    this.gridAction.emit({payload:payload,type:type});
  }
}
