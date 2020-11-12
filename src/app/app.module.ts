import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotoListComponent } from './sections/toto-list/toto-list.component';
import { TotoAdderComponent } from './sections/toto-adder/toto-adder.component';
import {CommonModule} from "@angular/common";
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TotoListComponent,
    TotoAdderComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
