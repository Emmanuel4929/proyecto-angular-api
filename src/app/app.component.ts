import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComentariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tareasFront';
}
