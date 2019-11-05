import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MessageResponse } from '../model/message-response.model'

// import { HttpErrorHandler, HandleError } from ''


const httpOptions = { 
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})

export class TodoService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080";



  private formatErrors(error: any){
    return throwError(error.error ? error.error.message : error.message);
  }

//Get todo task from the server 

getTodoList(): Observable<MessageResponse> {
  return this.http.get<MessageResponse>(this.baseUrl + "/getAllTask")
   .pipe(
     map( response => {
       const { data , status } = response;
       return response;
     }),
     catchError(this.formatErrors)
   )
}

  // POST: add a new Todo task to the database

  addTask (todo: Todo): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.baseUrl + "/addTodolist",todo , httpOptions)
    .pipe(
      map( response => {
        const {data, status } = response;
        return response;
      }),
      catchError(this.formatErrors)
    )
  }
  

  //DELETE: delete the new task from the list 
  deleteTask (id: number): Observable<MessageResponse>{
    const url =this.baseUrl + "/deleteById/?id=" + id ;
    return this.http.get<MessageResponse>(url, httpOptions)
    .pipe(
      map (response => {
        const {data , status} = response;
        return response;
      } ),
      catchError(this.formatErrors)
    )
  }




}
