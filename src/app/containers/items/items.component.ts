import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from '../../shared/ui/filters/filters.component';
import { GridComponent } from '../../shared/ui/grid/grid.component';
import { ItemsService } from '../../shared/services/items.service';
import { GridDataModel, ItemsKeys } from '../../shared/util/types';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [FiltersComponent,GridComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit{
  data!: any[];
  total: any;
  event:any;
  config: GridDataModel<ItemsKeys>[] = [
    { key: 'title' },
    { key: 'price', type: 'input' },
    {key: 'imgSrc',type:'image'},
    {type: 'button',text:'remove'},
    {type: 'button',text:'more'},
  ]
  constructor(
    private itemsService:ItemsService){

    }
    gridActionHandler(event : any){
      this.itemsService.remove(event.payload).subscribe;
    }
  ngOnInit(): void {
    this.itemsService.fetch().subscribe(({data,total})=>{
      this.data = data;
      this.total = total;
    });
  }
  
}
