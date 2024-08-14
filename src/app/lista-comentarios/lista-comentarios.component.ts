import { Component } from '@angular/core';
import { ConsumoApiService } from '../servicios/consumo-api.service';
import { commentarios } from '../modelos/comentarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-comentarios.component.html',
  styleUrl: './lista-comentarios.component.css',
})
export class ListaComentariosComponent {
  comentarios: commentarios[] = [];

  constructor(private servicioApi: ConsumoApiService) {}

  ngOnInit(): void {
    this.getlistacomentarios();
  }

  ngOnDestroy(): void {}

  getlistacomentarios() {
    this.servicioApi.getListadocomentarios().subscribe((datos) => {
      this.comentarios = datos;
    });
  }
}
