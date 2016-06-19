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
var message_service_1 = require("./message.service");
//*ngIf ="show"
var MessageComponent = (function () {
    // show =true;  // see template binding in the html code when value is true or false, removed and added to DOM
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        this.editClicked = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onEdit = function () {
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMessage(this.message);
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
            template: "\n <article class =\"panel panel-default\"   >\n                    <div class =\"panel-body\">\n                        {{ message.content}}\n                    </div>\n                    <footer class =\"panel-footer\">\n                        <div class =\"author\">\n                            {{message.username}}\n                        </div>\n                    <div class =\"config\">\n                        <a  (click)=\"onEdit()\">Edit</a>\n                        <a  (click)=\"onDelete()\">Delete</a>  \n                    </div>\n                    </footer>\n                </article>\n", styles: ["\n        .author {\n        \n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 80%;\n        }\n        .config{\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n        }\n"]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0QsZUFBZSxDQUFDLENBQUE7QUFDdEUsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELGVBQWU7QUFtQ2Y7SUFJRyw4R0FBOEc7SUFFN0csMEJBQXFCLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUgxQyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO0lBR0ksQ0FBQztJQUV4RCxpQ0FBTSxHQUFOO1FBRUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFkRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFyQ2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLHNtQkFlYixFQUFFLE1BQU0sRUFBQyxDQUFDLGdTQWNWLENBQUM7U0FDRCxDQUFDOzt3QkFBQTtJQXlCRix1QkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2Qlksd0JBQWdCLG1CQXVCNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG4vLypuZ0lmID1cInNob3dcIlxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgICB0ZW1wbGF0ZTogYFxuIDxhcnRpY2xlIGNsYXNzID1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlLmNvbnRlbnR9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcyA9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlLnVzZXJuYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbmAsIHN0eWxlczpbYFxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpZ3tcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTklO1xuICAgICAgICB9XG5gXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICAgIC8vbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKCdUaGUgY29udGVudCcsIG51bGwsICdNYXgnKTtcbiAgICBASW5wdXQoKSBtZXNzYWdlOk1lc3NhZ2U7XG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAvLyBzaG93ID10cnVlOyAgLy8gc2VlIHRlbXBsYXRlIGJpbmRpbmcgaW4gdGhlIGh0bWwgY29kZSB3aGVuIHZhbHVlIGlzIHRydWUgb3IgZmFsc2UsIHJlbW92ZWQgYW5kIGFkZGVkIHRvIERPTVxuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cblxuICAgIG9uRWRpdCgpe1xuXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmVkaXRNZXNzYWdlKHRoaXMubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgb25EZWxldGUoKXtcblxuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5kZWxldGVNZXNzYWdlKHRoaXMubWVzc2FnZSk7XG4gICAgfVxuXG4gICAvKiBvbkNsaWNrKCl7XG4gICAgICAgIC8vdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSAnQ2hhbmdlZCc7XG4gICAgICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCcpO1xuICAgIH0qL1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
