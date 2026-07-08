import { Component, output } from '@angular/core';

@Component({
  selector: 'app-daughter',
  imports: [],
  templateUrl: './daughter.html',
  styleUrl: './daughter.scss',
})
export class Daughter {

  public foo = output<boolean>();

  public bar(): void {
    this.foo.emit(true);
  }
}
