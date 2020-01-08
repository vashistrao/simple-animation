import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleAnimationModule } from '../../../simple-animation/src/lib/simple-animation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
