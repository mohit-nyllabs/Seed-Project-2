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
            template: " \n        <div class = \"row\">\n            <section class =\"col-md-8 col-md-offset-2\">\n                <article class =\"panel panel-default\">\n                    <div class =\"panel-body\">\n                        {{ message.content}}\n                    </div>\n                    <footer class =\"panel-footer\">\n                        <div class =\"author\">\n                            {{message.author}}\n                        </div>\n                    <div class =\"config\">\n                        <a href =\"#\">Edit</a>\n                        <a href =\"#\">Delete</a>\n                    </div>\n                    </footer>\n                </article>\n            </section>\n        </div>\n       \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQTBCMUM7SUFBQTtRQUNJLFlBQU8sR0FDUDtZQUNJLE9BQU8sRUFBRyxXQUFXO1lBQ3JCLE1BQU0sRUFBRyxLQUFLO1NBQ2pCLENBQUE7SUFDTCxDQUFDO0lBOUJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx3dUJBb0JUO1NBQ0osQ0FBQzs7b0JBQUE7SUFPRixtQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksb0JBQVksZUFNeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCBcbiAgICAgICAgPGRpdiBjbGFzcyA9IFwicm93XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcyA9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcyA9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS5jb250ZW50fX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3MgPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bWVzc2FnZS5hdXRob3J9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiY29uZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmID1cIiNcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZiA9XCIjXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgbWVzc2FnZSA9XG4gICAge1xuICAgICAgICBjb250ZW50IDogJ0EgbWVzc2FnZScsXG4gICAgICAgIGF1dGhvciA6ICdNYXgnXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
