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
        this.show = true; // see template binding in the html code when value is true or false, removed and added to DOM
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
            template: "\n <article class =\"panel panel-default\"  *ngIf =\"show\" >\n                    <div class =\"panel-body\">\n                        {{ message.content}}\n                    </div>\n                    <footer class =\"panel-footer\">\n                        <div class =\"author\">\n                            {{message.username}}\n                        </div>\n                    <div class =\"config\">\n                        <a href =\"#\" (click)=\"onClick()\">Edit</a>\n                        <a href =\"#\">Delete</a>\n                    </div>\n                    </footer>\n                </article>\n", styles: ["\n        .author {\n        \n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 80%;\n        }\n        .config{\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n        }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0QsZUFBZSxDQUFDLENBQUE7QUFDdEUsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBb0NsQztJQUFBO1FBR2MsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUNuRCxTQUFJLEdBQUUsSUFBSSxDQUFDLENBQUUsOEZBQThGO0lBTy9HLENBQUM7SUFMRyxrQ0FBTyxHQUFQO1FBQ0ksbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFQRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFyQ2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLG1uQkFlYixFQUFFLE1BQU0sRUFBQyxDQUFDLGdTQWNWLENBQUM7U0FDRCxDQUFDOzt3QkFBQTtJQWFGLHVCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx3QkFBZ0IsbUJBVzVCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgICB0ZW1wbGF0ZTogYFxuIDxhcnRpY2xlIGNsYXNzID1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAgKm5nSWYgPVwic2hvd1wiID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlLmNvbnRlbnR9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcyA9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZiA9XCIjXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmID1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG5gLCBzdHlsZXM6W2BcbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWd7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDE5JTtcbiAgICAgICAgfVxuYF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgICAvL21lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnVGhlIGNvbnRlbnQnLCBudWxsLCAnTWF4Jyk7XG4gICAgQElucHV0KCkgbWVzc2FnZTpNZXNzYWdlO1xuICAgIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIHNob3cgPXRydWU7ICAvLyBzZWUgdGVtcGxhdGUgYmluZGluZyBpbiB0aGUgaHRtbCBjb2RlIHdoZW4gdmFsdWUgaXMgdHJ1ZSBvciBmYWxzZSwgcmVtb3ZlZCBhbmQgYWRkZWQgdG8gRE9NXG4gICAgXG4gICAgb25DbGljaygpe1xuICAgICAgICAvL3RoaXMubWVzc2FnZS5jb250ZW50ID0gJ0NoYW5nZWQnO1xuICAgICAgICB0aGlzLmVkaXRDbGlja2VkLmVtaXQoJ0NoYW5nZWQnKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
