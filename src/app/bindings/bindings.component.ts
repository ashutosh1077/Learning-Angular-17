import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [],
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
public newID = "ExampleID";
public isDisabled = true;
}
