import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  standalone: true,
  imports: [],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {
  public cssClass = "myColor myWriting";
  public condition = false;
  myCall(){
   let a: number = 10;
   let b: number = 5;
  if (a < b) {
        return 'myColor';
      } else {
        return 'myWriting';
      }
  }
  
}

