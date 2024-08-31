import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from './sala/sala.component';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, SalaComponent, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ChatChallenge';
}
