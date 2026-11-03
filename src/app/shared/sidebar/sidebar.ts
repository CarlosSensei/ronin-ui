import { Component, input, output } from "@angular/core";
import { RouterLink } from '@angular/router';

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./sidebar.html",
  styleUrl: "./sidebar.scss"
})
export class Sidebar {

  readonly isOpen = input(false);

  readonly closeSidebar = output<void>();


}   