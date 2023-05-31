import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.sass']
})
export class Ejemplo1Component {
    order:string='';
    title = 'test';
    selectedOption: string = '';
  

  constructor( private route: ActivatedRoute ) {
    // Valor inicial seleccionado
    // this.selectedOption = 'opcion1';
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    console.log(id);
    

  }
}
