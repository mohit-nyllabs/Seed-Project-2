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
var message_1 = require("./message");
var MessageComponent = (function () {
    function MessageComponent() {
        this.editClicked = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onClick = function () {
        //this.message.content = 'Changed';
        this.editClicked.emit('Changed');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            template: "\n <article class =\"panel panel-default\">\n                    <div class =\"panel-body\">\n                        {{ message.content}}\n                    </div>\n                    <footer class =\"panel-footer\">\n                        <div class =\"author\">\n                            {{message.username}}\n                        </div>\n                    <div class =\"config\">\n                        <a href =\"#\" (click)=\"onClick()\">Edit</a>\n                        <a href =\"#\">Delete</a>\n                    </div>\n                    </footer>\n                </article>\n", styles: ["\n        .author {\n        \n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 80%;\n        }\n        .config{\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n        }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0QsZUFBZSxDQUFDLENBQUE7QUFDdEUsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBb0NsQztJQUFBO1FBR2MsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQU92RCxDQUFDO0lBTEcsa0NBQU8sR0FBUDtRQUNJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBTkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBckNiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxpbUJBZWIsRUFBRSxNQUFNLEVBQUMsQ0FBQyxnU0FjVixDQUFDO1NBQ0QsQ0FBQzs7d0JBQUE7SUFZRix1QkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksd0JBQWdCLG1CQVU1QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCxPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXG4gICAgdGVtcGxhdGU6IGBcbiA8YXJ0aWNsZSBjbGFzcyA9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS5jb250ZW50fX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3MgPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bWVzc2FnZS51c2VybmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJjb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgPVwiI1wiIChjbGljayk9XCJvbkNsaWNrKClcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZiA9XCIjXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuYCwgc3R5bGVzOltgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlne1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxOSU7XG4gICAgICAgIH1cbmBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgLy9tZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ1RoZSBjb250ZW50JywgbnVsbCwgJ01heCcpO1xuICAgIEBJbnB1dCgpIG1lc3NhZ2U6TWVzc2FnZTtcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBcbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIC8vdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSAnQ2hhbmdlZCc7XG4gICAgICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCcpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
