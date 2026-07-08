import { Component, input } from '@angular/core';

@Component({
  selector: 'app-son',
  imports: [],
  templateUrl: './son.html',
  styleUrl: './son.scss',
})
export class Son {

  text = input.required();
  number = input.required();
}
