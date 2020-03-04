import { Component, OnInit, Input, Inject } from '@angular/core';
import {PainelComponent} from '../painel/painel.component';

@Component({
  selector: 'app-tabela-produto',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaProdutosComponent implements OnInit {

  @Input() listaProdutos: any

  todosProdutos: any = []

  constructor(@Inject(PainelComponent) private parent: PainelComponent) { }

  ngOnInit(): void {
    
  }

}
