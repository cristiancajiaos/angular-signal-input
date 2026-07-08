import { Component, signal } from '@angular/core';
import { Son } from './son/son';
import { Daughter } from './daughter/daughter';

@Component({
  selector: 'app-layout',
  imports: [Son, Daughter],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  public sonText = signal('Foo 1');
  public sonNumber = signal(1);

  public changeInput() {
    this.sonText.set(`Foo ${Math.floor(Math.random() * 100)}`);
    this.sonNumber.set(Math.floor(Math.random() * 100));
  }

  public receiveFromDaughter(event: boolean) {
    this.changeInput();
  }
}
