// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ng-class-dir',
//   standalone: true,
//   imports: [],
//   templateUrl: './ng-class-dir.component.html',
//   styleUrls: ['./ng-class-dir.component.css']
// })
// export class NgClassDirComponent {
//  //  public check="myColor myWriting"
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class-dir.component.html',
  styleUrls: ['./ng-class-dir.component.css']  // Use 'styleUrls' instead of 'styleUrl'
})
export class NgClassDirComponent {
  public condition = false;
  public cssClass = "myColor myWriting";
  public cssArray = ["myColor","myWriting"];
  public c = new myClass;
}
class myClass{
  myColor = true;
  myWriting = true;
}

