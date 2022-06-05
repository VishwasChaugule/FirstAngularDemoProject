import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my first angular project';
  angularFeatures = ['A component-based framework for building scalable web applications',
  'A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more',
  'A suite of developer tools to help you develop, build, test, and update your code'];
  email= 'chaugule1369vish@gmail.com';

  sayHello(){
    alert('Hello, you have completed first angular demo project');
  }
}
