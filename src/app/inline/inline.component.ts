import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  standalone: true,
  imports: [],
  template: `<h2 class ="title">Ashutosh Rawat</h2>`,
  // styleUrl: 'inline.component.css'
  styles:[`
  .title{
    color:green;
    font-size:35px;
  }
  `]
})
export class InlineComponent {

}
