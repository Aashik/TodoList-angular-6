(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/todo-list/todo-list.component */ "./src/app/component/todo-list/todo-list.component.ts");




var routes = [
    { path: 'todo',
        component: _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide styles */\n\nh1 {\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n}\n\nh2, h3 { \n\n    color: #444;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n}\n\nbody {\n    margin: 2em;\n}\n\nbody, input[type=\"text\"], button {\n    color: #888;\n    font-family: Cambria, Georgia;\n}\n\n*{\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCOztBQUU1QjtJQUNJLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZUFBZTtBQUNuQjs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcGxpY2F0aW9uLXdpZGUgc3R5bGVzICovXG5cbmgxIHtcbiAgICBjb2xvcjogIzM2OTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1MCU7XG59XG5oMiwgaDMgeyBcblxuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDJlbTtcbn1cblxuYm9keSwgaW5wdXRbdHlwZT1cInRleHRcIl0sIGJ1dHRvbiB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XG59XG5cbip7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class = \"container\">\n  <div class=\"jumbotron\">\n  <h1 class=\"text-center\" > Welcome to {{ title }}!</h1>\n</div>\n \n<app-todo-list></app-todo-list>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/todo.service */ "./src/app/service/todo.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
        this.title = 'ToDo-List App';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/todo-list/todo-list.component */ "./src/app/component/todo-list/todo-list.component.ts");








var myRoots = [
// { path:'', component: HomeComponent, pathMatch:'full', canActivate:['authGuard']},
// { path: 'register', component: RegistrationComponent},
// { path: 'login', component: LoginComponent},
// { path: 'home', component: HomeComponent, canActivate:[AuthGuard]}
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/todo-list/todo-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/todo-list/todo-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\nform {\n  /* Just to center the form on the page */\n  margin: 0 auto;\n  width: 400px;\n  /* To see the outline of the form */\n  padding: 1em;\n  border: 1px solid #CCC;\n  border-radius: 1em;\n}\n\nform div + div {\n  margin-top: 1em;\n}\n\nlabel {\n  /* To make sure that all labels have the same size and are properly aligned */\n  display: inline-block;\n  width: 90px;\n  text-align: right;\n}\n\ninput, textarea {\n  /* To make sure that all text fields have the same font settings\n     By default, textareas have a monospace font */\n  font: 1em sans-serif;\n\n  /* To give the same size to all text fields */\n  width: 300px;\n  box-sizing: border-box;\n\n   /* To harmonize the look & feel of text field border */\n   border: 1px solid #999;\n  }\n\ninput:focus, textarea:focus {\n    /* To give a little highlight on active elements */\n    border-color: #000;\n  }\n\ntextarea {\n    /* To properly align multiline text fields with their labels */\n    vertical-align: top;\n  \n    /* To give enough room to type some text */\n    height: 5em;\n  }\n\n.button {\n    /* To position the buttons to the same position of the text fields */\n    padding-left: 90px; /* same size as the label elements */\n  }\n\nbutton {\n    /* This extra margin represent roughly the same space as the space\n       between the labels and their text fields */\n    margin-left: .5em;\n\n  }\n\n.strikethrough {\n    text-decoration: line-through;\n  }\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7RUFDRSx3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkVBQTZFO0VBQzdFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7a0RBQ2dEO0VBQ2hELG9CQUFvQjs7RUFFcEIsNkNBQTZDO0VBQzdDLFlBQVk7RUFDWixzQkFBc0I7O0dBRXJCLHNEQUFzRDtHQUN0RCxzQkFBc0I7RUFDdkI7O0FBRUE7SUFDRSxrREFBa0Q7SUFDbEQsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsOERBQThEO0lBQzlELG1CQUFtQjs7SUFFbkIsMENBQTBDO0lBQzFDLFdBQVc7RUFDYjs7QUFFQTtJQUNFLG9FQUFvRTtJQUNwRSxrQkFBa0IsRUFBRSxvQ0FBb0M7RUFDMUQ7O0FBRUE7SUFDRTtpREFDNkM7SUFDN0MsaUJBQWlCOztFQUVuQjs7QUFFQTtJQUNFLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbmZvcm0ge1xuICAvKiBKdXN0IHRvIGNlbnRlciB0aGUgZm9ybSBvbiB0aGUgcGFnZSAqL1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xuICAvKiBUbyBzZWUgdGhlIG91dGxpbmUgb2YgdGhlIGZvcm0gKi9cbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbmZvcm0gZGl2ICsgZGl2IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5sYWJlbCB7XG4gIC8qIFRvIG1ha2Ugc3VyZSB0aGF0IGFsbCBsYWJlbHMgaGF2ZSB0aGUgc2FtZSBzaXplIGFuZCBhcmUgcHJvcGVybHkgYWxpZ25lZCAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA5MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgLyogVG8gbWFrZSBzdXJlIHRoYXQgYWxsIHRleHQgZmllbGRzIGhhdmUgdGhlIHNhbWUgZm9udCBzZXR0aW5nc1xuICAgICBCeSBkZWZhdWx0LCB0ZXh0YXJlYXMgaGF2ZSBhIG1vbm9zcGFjZSBmb250ICovXG4gIGZvbnQ6IDFlbSBzYW5zLXNlcmlmO1xuXG4gIC8qIFRvIGdpdmUgdGhlIHNhbWUgc2l6ZSB0byBhbGwgdGV4dCBmaWVsZHMgKi9cbiAgd2lkdGg6IDMwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAvKiBUbyBoYXJtb25pemUgdGhlIGxvb2sgJiBmZWVsIG9mIHRleHQgZmllbGQgYm9yZGVyICovXG4gICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICB9XG4gIFxuICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xuICAgIC8qIFRvIGdpdmUgYSBsaXR0bGUgaGlnaGxpZ2h0IG9uIGFjdGl2ZSBlbGVtZW50cyAqL1xuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgdGV4dGFyZWEge1xuICAgIC8qIFRvIHByb3Blcmx5IGFsaWduIG11bHRpbGluZSB0ZXh0IGZpZWxkcyB3aXRoIHRoZWlyIGxhYmVscyAqL1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIFxuICAgIC8qIFRvIGdpdmUgZW5vdWdoIHJvb20gdG8gdHlwZSBzb21lIHRleHQgKi9cbiAgICBoZWlnaHQ6IDVlbTtcbiAgfVxuICBcbiAgLmJ1dHRvbiB7XG4gICAgLyogVG8gcG9zaXRpb24gdGhlIGJ1dHRvbnMgdG8gdGhlIHNhbWUgcG9zaXRpb24gb2YgdGhlIHRleHQgZmllbGRzICovXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4OyAvKiBzYW1lIHNpemUgYXMgdGhlIGxhYmVsIGVsZW1lbnRzICovXG4gIH1cbiAgXG4gIGJ1dHRvbiB7XG4gICAgLyogVGhpcyBleHRyYSBtYXJnaW4gcmVwcmVzZW50IHJvdWdobHkgdGhlIHNhbWUgc3BhY2UgYXMgdGhlIHNwYWNlXG4gICAgICAgYmV0d2VlbiB0aGUgbGFiZWxzIGFuZCB0aGVpciB0ZXh0IGZpZWxkcyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuXG4gIH1cblxuICAuc3RyaWtldGhyb3VnaCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cblxuICJdfQ== */"

/***/ }),

/***/ "./src/app/component/todo-list/todo-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/todo-list/todo-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <form #tempForm= \"ngForm\" (ngSubmit)=\"tempForm.reset()\">\n  <div class=\"form-group\">\n  <label for=\"TaskId\">TASK ID:</label>\n  <input [(ngModel)]=\"taskId\" name=\"id\" type=\"number\" class=\"form-control\" placeholder=\"Enter task id\" id=\"taskId\" >\n</div>\n\n\n<div class=\"form-group\">\n  <label for=\"taskDetails\">TASKS:</label>\n<input [(ngModel)]=\"taskDetails\" name=\"task\" type=\"text\" class=\"form-control\" placeholder=\"Enter task details\" id=\"taskDetails\" >\n</div> \n\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSave(taskId,taskDetails)\">Add</button>\n \n<br>\n</form>\n\n<div class=\"container\">\n  <table *ngIf=\"todoArray\" class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Task Id</th>\n        <th>Task Details</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let todo of todoArray\">\n        <td>{{todo.id}}</td>\n        <td>{{todo.task}}</td>\n        <td [ngClass]=\"todo.id ? 'null' : 'strikethrough'\" >{{todo.id}} </td>\n        <td>\n          <button class=\"btn btn-success btn-xs\"><i class=\"material-icons\" (click)=\"onComplete(todo)\">done</i></button>\n          <button class=\"btn btn-danger btn-xs\"><i class=\"material-icons\" (click)=\"onDelete(todo.id)\">delete</i></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n</div>"

/***/ }),

/***/ "./src/app/component/todo-list/todo-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/todo-list/todo-list.component.ts ***!
  \************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/todo */ "./src/app/model/todo.ts");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/todo.service */ "./src/app/service/todo.service.ts");




var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.newcomponent = "Please add your daily task !!!";
    }
    TodoListComponent.prototype.onSave = function (id, taskdetail) {
        var _this = this;
        // this.todo = new Todo(id,taskdetail,status);
        // if (!id && !taskdetail){return;}
        // this.todoArray.push(this.todo);
        // console.log(this.todoArray);
        this.todo = new _model_todo__WEBPACK_IMPORTED_MODULE_2__["Todo"](id, taskdetail, true);
        this.todoService.addTask(this.todo)
            .subscribe(function (data) { return _this.todoArray.push(data.data); });
    };
    TodoListComponent.prototype.ngOnInit = function () {
        this.onComponentCreate();
    };
    TodoListComponent.prototype.onComponentCreate = function () {
        var _this = this;
        this.todoService.getTodoList().subscribe(function (data) { return _this.todoArray = data.data; });
    };
    TodoListComponent.prototype.onDelete = function (todoId) {
        var _this = this;
        // for(let i=0; i<=this.todoArray.length; i++){
        //   if(todo == this.todoArray[i]){
        //     this.todoArray.splice(i,1)
        //   }
        // }
        // console.log("The task has been deleted successfully");
        this.todoService.deleteTask(todoId).subscribe(function (data) {
            if (data.status == 200) {
                for (var i = 0; i < _this.todoArray.length; i++) {
                    if (todoId == _this.todoArray[i].id) {
                        _this.todoArray.splice(i, 1);
                    }
                }
            }
        });
    };
    //submit todo task
    TodoListComponent.prototype.onComplete = function (value) {
        if (value !== "") {
            // this.todoArray.push(value.todo)
            alert("congrates on completing the task");
        }
        else {
            alert('Field required value');
        }
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/component/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/component/todo-list/todo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/model/todo.ts":
/*!*******************************!*\
  !*** ./src/app/model/todo.ts ***!
  \*******************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/service/todo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/todo.service.ts ***!
  \*****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






// import { HttpErrorHandler, HandleError } from ''
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'content-type': 'application/json' })
};
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080";
    }
    TodoService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error ? error.error.message : error.message);
    };
    //Get todo task from the server 
    TodoService.prototype.getTodoList = function () {
        return this.http.get(this.baseUrl + "/getAllTask")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.data, status = response.status;
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    // POST: add a new Todo task to the database
    TodoService.prototype.addTask = function (todo) {
        return this.http.post(this.baseUrl + "/addTodolist", todo, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.data, status = response.status;
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    //DELETE: delete the new task from the list 
    TodoService.prototype.deleteTask = function (id) {
        var url = this.baseUrl + "/deleteById/?id=" + id;
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = response.data, status = response.status;
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aaseek/projects/Todo-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map