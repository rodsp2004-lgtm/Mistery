import { Component, signal, ViewChild, type ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('titulo') titulo!: ElementRef;
  @ViewChild('header') header!: ElementRef;

  expansion = signal<boolean>(true);
  mostrarTexto = signal(true);
  alternar() {
    this.expansion.update((valor) => !valor);

    if (!this.expansion()) {
      this.titulo.nativeElement.innerText = 'M';
      this.header.nativeElement.style.width = '4vw';
    } else {
      this.titulo.nativeElement.innerText = 'Mistery';
      this.header.nativeElement.style.width = '15vw';
      this.mostrarTexto.set(true);
    }
  }
  eliminarTexto(event: TransitionEvent) {
    if (event.propertyName === 'opacity' && !this.expansion()) {
      this.mostrarTexto.set(false);
    }
  }
}
