import { Component, ContentChild, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatButtonModule, FormsModule,MatPaginatorModule],
  template: `
    <div>
      <ng-template #tpl>
        <h1 mat-dialog-title>Add item</h1>
        <div mat-dialog-content>
          <p>What's your favorite animal?</p>
          <form #form="ngForm">
            <mat-form-field>
              <mat-label>title</mat-label>
              <input matInput ngModel name="title" required>
            </mat-form-field>
            <mat-form-field>
              <mat-label>price</mat-label>
              <input matInput ngModel name="price" required minlength="5">
            </mat-form-field>
            <mat-form-field>
              <mat-label>category</mat-label>
              <input matInput ngModel name="category" required>
            </mat-form-field>
          </form>
        </div>
        <div mat-dialog-actions>
          <button mat-raised-button color="warn" [disabled]="form.invalid" [mat-dialog-close]="form.value" cdkFocusInitial>Ok</button>
        </div>
      </ng-template>
      <button mat-raised-button color="warn" (click)="openModal()">add item</button>
    </div>
  `,
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  openModal() {
    this.dialog.open(this.tpl).afterClosed().subscribe(value => {
      this.ev.emit(value);
    })
  }
  @ViewChild('tpl') tpl!: TemplateRef<any>;
  @Output() ev: EventEmitter<any> = new EventEmitter();
  constructor(
    private dialog: MatDialog
  ) {
  }
}