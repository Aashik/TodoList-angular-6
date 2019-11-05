import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Todo } from '../../model/todo';
import { ViewChild } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent  {

  newcomponent= "Please add your daily task !!!";

   constructor(private todoService: TodoService){}

todoArray:Todo[];
todo: Todo;



onSave(id:number, taskdetail:string){ 
  
  // this.todo = new Todo(id,taskdetail,status);
  // if (!id && !taskdetail){return;}
  // this.todoArray.push(this.todo);
  // console.log(this.todoArray);
  this.todo = new Todo(id,taskdetail, true);
  this.todoService.addTask(this.todo)
  .subscribe(data => this.todoArray.push(data.data));


}

ngOnInit() {
  this.onComponentCreate();

}

onComponentCreate(){
  this.todoService.getTodoList().subscribe(data => this.todoArray = data.data);
}



onDelete(todoId: number){
  // for(let i=0; i<=this.todoArray.length; i++){
  //   if(todo == this.todoArray[i]){
  //     this.todoArray.splice(i,1)
  //   }
  // }
  // console.log("The task has been deleted successfully");
  this.todoService.deleteTask(todoId).subscribe(
    data => {
      if(data.status == 200){
        for(let i = 0 ; i < this.todoArray.length ; i++){
          if(todoId == this.todoArray[i].id){
            this.todoArray.splice(i,1)
          }
        }
      }
    });
}

  //submit todo task
  onComplete(value:any){
    
    if(value !== ""){
      // this.todoArray.push(value.todo)
      alert("congrates on completing the task");

    }else{
      alert('Field required value')
    }
  }



  }

