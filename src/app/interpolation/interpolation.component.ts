import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  public name = 'Aryan sharma is a hard working employee';
  public age = 22;
  helloMessage(){
    return "Hello Ashutosh";
  }
}
