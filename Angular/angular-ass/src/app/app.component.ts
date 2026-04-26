import { Component, signal, ValueProvider } from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 

@Component({
   selector: 'app-root',
   imports: [RouterOutlet],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css' 
}) 
export class AppComponent {
    title = 'Registration form';
    displayName ="";
    displayAddress="";
    displayEmail = "";
    displayMobile = "";
    
    getValue(name : string , address :string ,mobile:string, email :string):void{
         this.displayName = name;
         this.displayAddress = address;
         this.displayMobile = mobile;
         this.displayEmail = email;
    } 
}