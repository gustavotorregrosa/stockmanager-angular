import { Component, OnInit, Input, Inject } from '@angular/core';
import { AuxiliaresService } from '../../../../auxiliares.service';
import {PainelComponent} from '../painel/painel.component'


@Component({
  selector: 'app-modal-deleta-categoria',
  templateUrl: './modal-deleta.component.html',
  styleUrls: ['./modal-deleta.component.css']
})
export class ModalDeletaComponent implements OnInit {

  constructor(@Inject(PainelComponent) private parent: PainelComponent, private auxiliar: AuxiliaresService) { }

  loader: boolean = false
  elem: any = null
  instance: any = null
  @Input() id: number = 0
  @Input() nome: string = ""

  ngOnInit(): void {
  }

}
