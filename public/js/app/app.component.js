"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.message = {
            content: 'A message',
            author: 'Max'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n         <div class=\"row\">\n             <section class =\"col-md-8 col-md-offset-2\">\n                <input type=\"text\" [(ngModel)] =\"message.content\">\n            </section>\n        </div>\n        <div class = \"row\">\n            <section class =\"col-md-8 col-md-offset-2\">\n                <article class =\"panel panel-default\">\n                    <div class =\"panel-body\">\n                        {{ message.content}}\n                    </div>\n                    <footer class =\"panel-footer\">\n                        <div class =\"author\">\n                            {{message.author}}\n                        </div>\n                    <div class =\"config\">\n                        <a href =\"#\">Edit</a>\n                        <a href =\"#\">Delete</a>\n                    </div>\n                    </footer>\n                </article>\n            </section>\n        </div>\n       \n    ",
            styles: ["\n        .author {\n        \n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 80%;\n        }\n        .config{\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n        }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQThDMUM7SUFBQTtRQUNJLFlBQU8sR0FDUDtZQUNJLE9BQU8sRUFBRyxXQUFXO1lBQ3JCLE1BQU0sRUFBRyxLQUFLO1NBQ2pCLENBQUE7SUFDTCxDQUFDO0lBbEREO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxrN0JBeUJUO1lBQ0QsTUFBTSxFQUFDLENBQUMsZ1NBY1gsQ0FBQztTQUNELENBQUM7O29CQUFBO0lBT0YsbUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLG9CQUFZLGVBTXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3MgPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV0gPVwibWVzc2FnZS5jb250ZW50XCI+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzID1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzID1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlLmNvbnRlbnR9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcyA9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlLmF1dGhvcn19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgPVwiI1wiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmID1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgIGAsXG4gICAgc3R5bGVzOltgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlne1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxOSU7XG4gICAgICAgIH1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgbWVzc2FnZSA9XG4gICAge1xuICAgICAgICBjb250ZW50IDogJ0EgbWVzc2FnZScsXG4gICAgICAgIGF1dGhvciA6ICdNYXgnXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
