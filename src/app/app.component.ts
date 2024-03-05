import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { InlineComponent } from './inline/inline.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NgClassDirComponent } from './ng-class-dir/ng-class-dir.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleBindingComponent } from './style-binding/style-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    InlineComponent,
    InterpolationComponent,
    EventsComponent,
    BindingsComponent,
    ClassBindingComponent,
    NgClassDirComponent,
    StyleBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
  name = "Ashutosh Rawat";
  helloMessage(){
    return "HEllo Ashutosh ";
  }
}
