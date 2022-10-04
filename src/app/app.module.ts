import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { FatherComponent } from './components/father/father.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    FormComponent,
    TableComponent,
    FatherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule

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
