import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SimpleAnimationComponent } from './simple-animation.component';
import { FadeInOutComponent } from './fade-in-out/fade-in-out.component';
import { ShrinkableHeaderDirective } from './shrinkable-header/shrinkable-header.directive';



@NgModule({
  declarations: [SimpleAnimationComponent, FadeInOutComponent, ShrinkableHeaderDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [SimpleAnimationComponent, FadeInOutComponent, ShrinkableHeaderDirective]
})
export class SimpleAnimationModule { }
