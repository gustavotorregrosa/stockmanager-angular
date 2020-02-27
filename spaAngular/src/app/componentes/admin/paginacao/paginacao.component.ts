import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  constructor() { }

  @Input() qtdePaginas: number

  ngOnInit(): void {

    // setInterval(() => {
    //   console.log(this.qtdePaginas)
    // }, 1000)

    console.log("as paginas sao...")
    console.log(this.paginas())
  }


  paginas = () => {
    let paginasArray: Array<any> = []
    for (let index = 0; index < this.qtdePaginas; index++) {
        paginasArray.push({
          pagina: index,
          classe: "waves-effect"
        })
    }

    return paginasArray
  }

}
