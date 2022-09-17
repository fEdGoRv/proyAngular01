import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent
  ]
})
export class AppModule { }
