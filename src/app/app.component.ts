import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild';
  @ViewChild('DateOfBirth') dob:ElementRef | any;
  @ViewChild('Age') Age:ElementRef | any; 
  @ViewChild(ChildcomponentComponent,{static:true}) sunilvich: ChildcomponentComponent | undefined;
  DateOfBirth: any;

  calculateage(){
   let dob = new Date(this.dob?.nativeElement.value).getFullYear();
   let dob1 = new Date().getFullYear();
   let age = dob1-dob;
   this.Age.nativeElement.value=age;
  }
  triggerView(){
    console.log('check 1');
     this.sunilvich?.SayHello();
     console.log('check 2');
   }



}
