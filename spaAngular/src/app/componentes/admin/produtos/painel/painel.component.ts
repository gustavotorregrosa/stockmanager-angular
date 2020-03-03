import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { BarraBuscaComponent as BarraBusca } from '../../barra-busca/barra-busca.component';
import { PaginacaoComponent as Paginacao } from '../../paginacao/paginacao.component';

@Component({
  selector: 'app-painel-produtos',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @ViewChild(BarraBusca) barraBusca: BarraBusca;

  constructor() { }

  public loader: boolean = true

  ngOnInit(): void {
  }

}
