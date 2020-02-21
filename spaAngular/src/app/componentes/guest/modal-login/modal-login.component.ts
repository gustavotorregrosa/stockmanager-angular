import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.abreModal()
    // }, 4000)
  }

  abreModal = () => {
    M.toast({html: 'Abre modal do login mesmo'})
  }

}
