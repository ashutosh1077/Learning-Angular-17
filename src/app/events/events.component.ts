import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  public name = " ";
  // myEvent(){
  //   // alert('Welcome To Angular');
  //   //console.log('welcome to the angular');
  //   this.name = 'Welcome Ashutosh ';
  //   }
  // myEvent(a:any){  // 'any' se a ko kisi v data type ka bna skte hai
  //   alert(a)
  // }
  // myEvent(name:string , age:number){
  //   alert(name + " " + age );
  // }
  // myEvent(event:any){
  //   console.log(event.type);
  // }

  myEvent(){
    console.log("hello");
  }
}
