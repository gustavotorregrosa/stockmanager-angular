import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(M.toast({html: 'I am a toast!'}))
    // }, 2000)

      // setTimeout(() => {
      //   this.router.navigateByUrl("/admin")
      // }, 3000)
  }

}
