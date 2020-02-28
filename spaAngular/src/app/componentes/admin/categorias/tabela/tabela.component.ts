import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-categoria',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() listaCategorias: any


  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.listaCategorias)
    // }, 2000)
  }

}
