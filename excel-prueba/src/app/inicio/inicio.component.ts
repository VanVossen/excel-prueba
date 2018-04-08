import { Component, OnInit } from '@angular/core';
import { ConnectingFredService } from '../connecting-fred.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public datos:Array<any>;

  constructor(public datosCategoria: ConnectingFredService) { }

  ngOnInit() {
  }

  obtenerInfoCategoria() {

    this.datosCategoria.traerTodasLasCaterias().then(
      datos => {
        this.datos = datos;
        console.log(this.datos);
      });
  }

}
