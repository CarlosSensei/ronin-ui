import { Component } from '@angular/core';
import { RoninLavaComponent } from '../../components/backgrounds/ronin-lava/ronin-lava';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RoninLavaComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}