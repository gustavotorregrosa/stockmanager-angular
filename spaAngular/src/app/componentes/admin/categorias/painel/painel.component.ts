import { Component, OnInit, ViewChild } from '@angular/core';
import {BarraBuscaComponent as BarraBusca} from '../../barra-busca/barra-busca.component';

@Component({
  selector: 'app-categorias-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @ViewChild(BarraBusca) barraBusca: BarraBusca;

  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   console.log("ola mundo...")
    //   console.log(this.barraBusca.textoBusca)
    // }, 1000)
  }
  

}
