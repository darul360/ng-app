import { Component, OnInit } from '@angular/core';
import { GridComponent } from '../../shared/ui/grid/grid.component';
import { FiltersComponent } from '../../shared/ui/filters/filters.component';
import { ItemsService } from '../../shared/services/items.service';
import { Action, GridDataModel, ItemsFiltersModel, ItemsKeys } from '../../shared/util/types';
import { AddItemComponent } from "./add-item/add-item.component";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-items',
    standalone: true,
    templateUrl: './items.component.html',
    styleUrl: './items.component.scss',
    imports: [GridComponent, FiltersComponent, AddItemComponent,MatPaginatorModule, FormsModule]
})
export class ItemsComponent implements OnInit {


addItemHandler($event: any) {
 this.itemsService.add($event).subscribe(resp=>{
  this.fetchItems();
 })
}
  filters:  ItemsFiltersModel = {
    currentPage:1,
    itemsPerPage : 5
  };
  updateFilter($event:any){
    this.filters$.next({...this.filters$.value,...$event})
  }
  data!: any[];
  total: any;
  config: GridDataModel<ItemsKeys>[] = [
    { key: 'title' },
    { key: 'price', type: 'input' },
    { key: 'imgSrc', type: 'image' },
    { type: 'button', text: 'remove' },
    { type: 'button', text: 'more' }
  ]
  filters$: BehaviorSubject<ItemsFiltersModel> = new BehaviorSubject<ItemsFiltersModel>({
    currentPage: 1,
    itemsPerPage: 5
  })
  
  constructor(
    private itemsService: ItemsService
  ) { }
  ngOnInit(): void {
    this.filters$.subscribe(()=>this.fetchItems())
  }
  private fetchItems() {
    this.itemsService.fetch(this.filters$.value).subscribe(({ data, total }) => {
      this.data = data;
      this.total = total;
    });
  }
  gridActionHandler(ev: Action) {
    switch (ev.type) {
      case 'remove':
        this.itemsService.remove(ev.payload).subscribe((resp: any) => {
        this.fetchItems();
        })
        break;
      case "more":
        break;
      default:
        break;
    }
  }
}