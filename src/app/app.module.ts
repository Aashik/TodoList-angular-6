import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { Routes } from '@angular/router';

const myRoots: Routes = [
  // { path:'', component: HomeComponent, pathMatch:'full', canActivate:['authGuard']},
  // { path: 'register', component: RegistrationComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'home', component: HomeComponent, canActivate:[AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
