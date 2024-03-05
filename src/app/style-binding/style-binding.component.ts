import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
  public condition = false;
   myStyles = {
  'color':'red', 
  'font-family':'cooper',
  'font-size':'40px'}
}
