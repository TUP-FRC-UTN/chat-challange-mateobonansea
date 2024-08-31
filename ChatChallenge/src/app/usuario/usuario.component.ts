import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  mensajePepe: string = '';
  mensajeMaria: string = '';

  @Output() enviar = new EventEmitter<{usuario: string, mensaje: string}>();

  guardarMensaje(usuario: string, mensaje: string) {
  
    
    this.enviar.emit({ usuario, mensaje });
  }
}


