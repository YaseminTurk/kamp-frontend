import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //html tagı gibi kullanmak için yazılır.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Engin Demiroğ';
  

}

//component html in datasının yönetildiği yerdir.