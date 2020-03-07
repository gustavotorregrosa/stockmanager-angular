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
    setTimeout(() => {
      this.instance.destroy()
      if(n){
        this.nElement.value = n   
      }
      this.instance = M.FormSelect.init(this.nElement, {})
    },50)
  }



  // catSelecionada = () => {
  //   return this.meuElem
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   alert("mudou...")
  //   // this.instance.destroy();
  //   // this.nElement = this.meuElem.nativeElement;
  //   // this.instance = M.FormSelect.init(this.nElement, {})
      

  // }
  

  alteraCategoria = (e: any) => {
    e.preventDefault()
    this.categoriaSelecionada = e.target.value
  }


  ngOnInit(): void {
    // this.elem = document.getElementById('modal-edita-categoria')
    // this.instance = M.Modal.init(this.elem, {})
    // setInterval(() => {
    //   console.log("a lista interna eh")
    //   console.log(this.listaCategorias)
    // }, 1000)
    


  }

}
