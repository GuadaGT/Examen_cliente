import { Component } from '@angular/core';
import { Bottle} from "../../common/bodega";
import {BodegaService} from "../../services/bodega.service";

@Component({
  selector: 'app-bodega-list',
  templateUrl: './bodega-list.component.html',
  styleUrls: ['./bodega-list.component.css']
})
export class BodegaListComponent {

  listaBodega: Bottle[]=[];

  constructor(private bodegaService: BodegaService)
  {
    this.loadBodega();
  }

  private loadBodega()
  {
    this.bodegaService.getAll().subscribe(
      {
        next: value => {
          this.listaBodega = value.bottles.bottles;
          console.log(value)
        },
        error:(err)=>{
          console.error(err);
        },
        complete:()=>{
          console.log('Complete');
        }
      }
    )
  }
}
