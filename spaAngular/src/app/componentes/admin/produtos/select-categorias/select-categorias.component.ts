import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, SimpleChanges } from '@angular/core';
import M from 'materialize-css';


@Component({
  selector: 'app-select-categorias',
  templateUrl: './select-categorias.component.html',
  styleUrls: ['./select-categorias.component.css']
})
export class SelectCategoriasComponent implements OnInit, AfterViewInit {

  @Input() listaCategorias: any = []
  @Input() exibeOptTodosCat: boolean
  @ViewChild("selectCategorias") meuElem: ElementRef;
  nElement: any = null
  instance: any = null
  categoriaSelecionada: number = null
  
  constructor() { }

  ngAfterViewInit(): void {
   this.nElement = this.meuElem.nativeElement;
   this.instance = M.FormSelect.init(this.nElement, {})
  }

  atualizaExibicao = (n: number = null) => {
    this.categoriaSelecionada = n
    setTimeout(() => {
      this.instance.destroy()
      if(n){
        this.nElement.value = n   
      }
      this.instance = M.FormSelect.init(this.nElement, {})
    },50)
  }

  alteraCategoria = (e: any) => {
    e.preventDefault()
    this.categoriaSelecionada = e.target.value
  }


  ngOnInit(): void {}

}
