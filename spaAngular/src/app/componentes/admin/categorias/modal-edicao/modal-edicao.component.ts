import { Component, OnInit, Input } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-modal-edicao-categoria',
  templateUrl: './modal-edicao.component.html',
  styleUrls: ['./modal-edicao.component.css']
})
export class ModalEdicaoComponent implements OnInit {

  loader: boolean = false
  // categoria: any

  elem:any = null
  instance: any = null
  @Input() id: number = 0
  @Input() nome: string = ""

  constructor() { }

  ngOnInit(): void {
    this.elem = document.getElementById('modal-edita-categoria')
    this.instance = M.Modal.init(this.elem, {
      onCloseEnd: () => {
        this.loader = false
      }
    })
  }

  abreModal = (categoria) => {
    this.id = categoria.id
    this.nome = categoria.nome
    this.instance.open()
    setTimeout(() => {
      M.updateTextFields()
    }, 100)
   
  }

  fechaModal = () => {
    this.instance.close()
  }

  salvar = (e: Event) => {
    e.preventDefault()
    this.loader = true
    console.log(this.id)
    console.log(this.nome)
  }


}
