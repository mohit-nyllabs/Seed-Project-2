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
var core_1 = require("@angular/core");
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
        this.message = null; // reference to obj
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.message) {
            // Edit
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            this.message = null; // reference to obj is changed to new object
        }
        else {
            var message = new message_1.Message(form.content, null, 'Dummy');
            //console.log(message);
            this._messageService.addMessage(message)
                .subscribe(function (data) {
                console.log(data);
                _this._messageService.messages.push(data); // comment out this and updates will not be istant
            }, function (error) { return console.error(error); });
        }
    };
    MessageInputComponent.prototype.onCreate = function (content) {
    };
    MessageInputComponent.prototype.onCancel = function () {
        this.message = null;
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.messageIsEdit.subscribe(function (message) {
            _this.message = message;
        });
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n          <section class =\"col-md-8 col-md-offset-2\">\n           <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n              <div class=\"form-group\">\n                <label for=\"content\">Content</label>\n                <input ngControl=\"content\" type=\"text\" class=\"form-control\" id=\"content\" #input [value] = \"message?.content\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">{{ !message ? 'Send Message': 'Save Message'}}</button>\n            <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-danger\" *ngIf=\"message\">Cancel </button>\n            </form>\n        \n            </section>            \n",
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFDN0IsQ0FBQyxDQUQrQztBQXVCaEQ7SUFLSSwrQkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBSG5ELFlBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxtQkFBbUI7SUFHUyxDQUFDO0lBRXRELHdDQUFRLEdBQVIsVUFBUyxJQUFRO1FBQWpCLGlCQThCQztRQTVCRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNiLE9BQU87WUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzNDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztZQUVOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUUsNENBQTRDO1FBR3RFLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNELElBQU0sT0FBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRSx1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNuQyxTQUFTLENBQ04sVUFBQSxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFHLGtEQUFrRDtZQUVsRyxDQUFDLEVBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUVsQyxDQUFBO1FBQ1QsQ0FBQztJQUdMLENBQUM7SUFDRCx3Q0FBUSxHQUFSLFVBQVMsT0FBYztJQUV2QixDQUFDO0lBQ0Qsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQzFDLFVBQUEsT0FBTztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUksT0FBTyxDQUFDO1FBQzVCLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQXZFTDtRQUFDLGdCQUFTLENBQUM7WUFFUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxnckJBWWI7U0FHQSxDQUFDOzs2QkFBQTtJQXVERiw0QkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFyRFksNkJBQXFCLHdCQXFEakMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIlxuaW1wb3J0IHtPbkluaXR9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL2NvcmUvZXNtL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3NcIjtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3MgPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmLnZhbHVlKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29udGVudFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbnRlbnRcIiAjaW5wdXQgW3ZhbHVlXSA9IFwibWVzc2FnZT8uY29udGVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPnt7ICFtZXNzYWdlID8gJ1NlbmQgTWVzc2FnZSc6ICdTYXZlIE1lc3NhZ2UnfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiICpuZ0lmPVwibWVzc2FnZVwiPkNhbmNlbCA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgICAgICAgICA8L3NlY3Rpb24+ICAgICAgICAgICAgXG5gLFxuICAgIC8vIHJlbW92ZSBwcm92aWRlcnNcbiAgICAvLyBwcm92aWRlcnM6W01lc3NhZ2VTZXJ2aWNlXSAvL2luamVjdCBtZXNzYWdlIHNlcnZpY2Vcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBtZXNzYWdlOiBNZXNzYWdlID0gbnVsbDsgLy8gcmVmZXJlbmNlIHRvIG9ialxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2Upe31cblxuICAgIG9uU3VibWl0KGZvcm06YW55KSB7XG5cbiAgICAgICAgaWYodGhpcy5tZXNzYWdlKXtcbiAgICAgICAgICAgIC8vIEVkaXRcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gZm9ybS5jb250ZW50O1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsOyAgLy8gcmVmZXJlbmNlIHRvIG9iaiBpcyBjaGFuZ2VkIHRvIG5ldyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCwgJ0R1bW15Jyk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5wdXNoKGRhdGEpOyAgIC8vIGNvbW1lbnQgb3V0IHRoaXMgYW5kIHVwZGF0ZXMgd2lsbCBub3QgYmUgaXN0YW50XG5cbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBvbkNyZWF0ZShjb250ZW50OnN0cmluZyl7XG5cbiAgICB9XG4gICAgb25DYW5jZWwoKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlSXNFZGl0LnN1YnNjcmliZShcbiAgICAgICAgICBtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlICA9IG1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
