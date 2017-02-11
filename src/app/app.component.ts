import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">
      <img [src]="logo">
    </header>
    <div class="wrapper">
      <board></board>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logo: string = 'assets/logo.svg';
}
