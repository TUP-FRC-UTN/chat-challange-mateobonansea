import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [CommonModule, FormsModule, UsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {

  @Input()   mensajes: {usuario: string, mensaje: string}[] = [];


  recibirMensaje(event: {usuario: string, mensaje: string}) {
    this.mensajes.push(event);
  }

}
