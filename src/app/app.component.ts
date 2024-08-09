import { Component } from '@angular/core';
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
