import { Component, OnInit, Input, Inject } from '@angular/core';
import {PainelComponent} from '../painel/painel.component';

@Component({
  selector: 'app-tabela-categoria',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaCategoriasComponent implements OnInit {

  @Input() listaCategorias: any


  constructor(@Inject(PainelComponent) private parent: PainelComponent) { }

  ngOnInit(): void {}
  

  editaCategoria = (e: Event, categoria) => {
    e.preventDefault()
    this.parent.abreModalEditaCategoria(categoria)
  }


  deletaCategoria = (e: Event, categoria) => {
    e.preventDefault()
    this.parent.abreModalDeletaCategoria(categoria)
  }
}
