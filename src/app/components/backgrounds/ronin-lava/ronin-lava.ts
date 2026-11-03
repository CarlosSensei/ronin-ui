import {
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'ronin-lava',
  standalone: true,
  templateUrl: './ronin-lava.html',
  styleUrl: './ronin-lava.scss',
})
export class RoninLavaComponent {

  mouseX = window.innerWidth / 2;
  mouseY = window.innerHeight / 2;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const rect =
      document.body.getBoundingClientRect();

    this.mouseX =
      event.clientX - rect.left;

    this.mouseY =
      event.clientY - rect.top;
  }
}