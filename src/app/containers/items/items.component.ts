import { Component, OnInit } from '@angular/core';
import { GridComponent } from '../../shared/ui/grid/grid.component';
import { FiltersComponent } from '../../shared/ui/filters/filters.component';
import { ItemsService } from '../../shared/services/items.service';
import { Action, GridDataModel, ItemsKeys } from '../../shared/util/types';
@Component({
  selector: 'app-items',
  standalone: true,
  imports: [GridComponent, FiltersComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit {
  filters: { [key: string]: any; } | undefined = {};
  updateFiters($event: any) {
    this.filters = $event;
    this.fetchItems();
  }
  x({ value }: any) {
    this.filters = { ...this.filters, itemsPerPage: value }
    this.fetchItems();
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
  constructor(
    private itemsService: ItemsService
  ) { }
  ngOnInit(): void {
    this.fetchItems();
  }
  private fetchItems() {
    this.itemsService.fetch(this.filters).subscribe(({ data, total }) => {
      this.data = data;
      this.total = total;
    });
  }
  gridActionHandler(ev: Action) {
    switch (ev.type) {
      case 'remove':
        this.itemsService.remove(ev.payload).subscribe((resp: any) => {
          debugger;
        })
        break;
      case "more":
        break;
      default:
        break;
    }
  }
}