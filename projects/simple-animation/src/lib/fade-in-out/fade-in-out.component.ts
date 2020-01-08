import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition, animateChild } from '@angular/animations';

@Component({
  selector: 'sa-fade-in-out',
  templateUrl: './fade-in-out.component.html',
  styleUrls: ['./fade-in-out.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-out', style({ opacity: 1 })),
        animateChild()
      ]),
      transition(':leave', [
        animateChild(),
        animate('250ms ease-in'),
        style({ opacity: 0 })
      ])
    ])
  ]
})
export class FadeInOutComponent {

  show= true;

  constructor() { }
  
  @Input() set visible(value: boolean){
    this.show = value;
  }
}
