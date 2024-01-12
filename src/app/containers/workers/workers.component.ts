import { Component, OnInit } from '@angular/core';
import { GridComponent } from "../../shared/ui/grid/grid.component";
import {WorkersService} from '../../shared/services/workers.service'
import { GridDataModel, WorkersKeys } from '../../shared/util/types';

@Component({
    selector: 'app-workers',
    standalone: true,
    templateUrl: './workers.component.html',
    styleUrl: './workers.component.css',
    imports: [GridComponent]
})
export class WorkersComponent implements OnInit{
    workers!: any[];
    config: GridDataModel<WorkersKeys>[] = [
        { key: 'name' }
        // { key: 'phone', type: 'input' },
        // {key: 'category',type:'image'},
        // {type: 'button',text:'remove'},
        // {type: 'button',text:'more'},
      ]
    constructor(private workerService : WorkersService){};
    ngOnInit(): void {
        this.workerService.fetch().subscribe((resp:any)=>
        {
            console.log(resp);
            this.workers = resp.data;
        })
    }

}
