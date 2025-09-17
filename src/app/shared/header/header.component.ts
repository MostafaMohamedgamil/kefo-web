import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CollapseDirective } from "ngx-bootstrap/collapse";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CollapseDirective,
    BrowserAnimationsModule,
  ],
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isScrolled = false;
  isCollapsed = true;
  isOpen = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 50;
  }
  onNavLinkClick(): void {
    this.isCollapsed = true;
    this.isOpen = false;
  }

  toggleBurger(): void {
    // this.isOpen = !this.isOpen; // Toggle the state
    this.isCollapsed = !this.isCollapsed;
  }
}
