import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { matcher: startsWith('angular1'), component: WrapperComponent, data: { importName: 'angular1', elementName: 'angular1-element' }},
      { matcher: startsWith('angular2'), component: WrapperComponent, data: { importName: 'angular2', elementName: 'angular2-element' }},
      { matcher: startsWith('angular3'), component: WrapperComponent, data: { importName: 'angular3', elementName: 'angular3-element' }},
      { matcher: startsWith('react1'), component: WrapperComponent, data: { importName: 'react1', elementName: 'react-element' }},
    ])
  ],
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
