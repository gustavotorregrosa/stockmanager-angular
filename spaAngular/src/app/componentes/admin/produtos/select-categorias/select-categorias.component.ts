import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-select-categorias',
  templateUrl: './select-categorias.component.html',
  styleUrls: ['./select-categorias.component.css']
})
export class SelectCategoriasComponent implements OnInit, AfterViewInit {

  @Input() listaCategorias: any = []
  @ViewChild("selectCategorias") meuElem: ElementRef;
  nElement: any = null
  instance: any = null
  
  constructor() { }

  ngAfterViewInit(): void {
   this.nElement = this.meuElem.nativeElement;
   this.instance = M.FormSelect.init(this.nElement, {})
    
  }

  atualizaExibicao = () => {
    setTimeout(() => {

      this.instance.destroy();
      // this.nElement = this.meuElem.nativeElement;
      this.instance = M.FormSelect.init(this.nElement, {})
    },100)
  

  }

  // ngOnChanges(changes: SimpleChanges) {
  //   alert("mudou...")
  //   this.instance.destroy();
  //   this.nElement = this.meuElem.nativeElement;
  //   this.instance = M.FormSelect.init(this.nElement, {})
      

  // }
  



  ngOnInit(): void {
    // this.elem = document.getElementById('modal-edita-categoria')
    // this.instance = M.Modal.init(this.elem, {})
    // setInterval(() => {
    //   console.log("a lista interna eh")
    //   console.log(this.listaCategorias)
    // }, 1000)

  

  }

}
