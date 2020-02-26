import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrls: ['./barra-busca.component.css']
})
export class BarraBuscaComponent implements OnInit {

  constructor() { }

  @Input() textoBusca:string = ""

  barraAtiva = () => {
    return this.textoBusca.length > 0
  }

  ngOnInit(): void {
    
  }

}
