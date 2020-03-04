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

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.listaCategorias)
    // }, 2000)
  }
  

  editaCategoria = (e: Event, categoria) => {
    e.preventDefault()
    // console.log("editando categoria")
    // console.log(categoria)
    this.parent.abreModalEditaCategoria(categoria)
  }


  deletaCategoria = (e: Event, categoria) => {
    e.preventDefault()
    // console.log("editando categoria")
    // console.log(categoria)
    this.parent.abreModalDeletaCategoria(categoria)
  }
}
