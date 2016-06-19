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
        this.message = null;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.message) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFDN0IsQ0FBQyxDQUQrQztBQXVCaEQ7SUFLSSwrQkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBSG5ELFlBQU8sR0FBWSxJQUFJLENBQUM7SUFHNkIsQ0FBQztJQUV0RCx3Q0FBUSxHQUFSLFVBQVMsSUFBUTtRQUFqQixpQkFvQkM7UUFsQkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7UUFFakIsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0QsSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xFLHVCQUF1QjtZQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7aUJBQ25DLFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUcsa0RBQWtEO1lBRWxHLENBQUMsRUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBRWxDLENBQUE7UUFDVCxDQUFDO0lBR0wsQ0FBQztJQUNELHdDQUFRLEdBQVIsVUFBUyxPQUFjO0lBRXZCLENBQUM7SUFDRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxPQUFPO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUM7UUFDNUIsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBN0RMO1FBQUMsZ0JBQVMsQ0FBQztZQUVQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLGdyQkFZYjtTQUdBLENBQUM7OzZCQUFBO0lBNkNGLDRCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSw2QkFBcUIsd0JBMkNqQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiXG5pbXBvcnQge09uSW5pdH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvY29yZS9lc20vc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rc1wiO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcyA9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjb250ZW50XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dCBbdmFsdWVdID0gXCJtZXNzYWdlPy5jb250ZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3sgIW1lc3NhZ2UgPyAnU2VuZCBNZXNzYWdlJzogJ1NhdmUgTWVzc2FnZSd9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKm5nSWY9XCJtZXNzYWdlXCI+Q2FuY2VsIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICBcbiAgICAgICAgICAgIDwvc2VjdGlvbj4gICAgICAgICAgICBcbmAsXG4gICAgLy8gcmVtb3ZlIHByb3ZpZGVyc1xuICAgIC8vIHByb3ZpZGVyczpbTWVzc2FnZVNlcnZpY2VdIC8vaW5qZWN0IG1lc3NhZ2Ugc2VydmljZVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UgPSBudWxsO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2Upe31cblxuICAgIG9uU3VibWl0KGZvcm06YW55KSB7XG5cbiAgICAgICAgaWYodGhpcy5tZXNzYWdlKXtcbiAgICAgICAgICAgIC8vIEVkaXRcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCwgJ0R1bW15Jyk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5wdXNoKGRhdGEpOyAgIC8vIGNvbW1lbnQgb3V0IHRoaXMgYW5kIHVwZGF0ZXMgd2lsbCBub3QgYmUgaXN0YW50XG5cbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBvbkNyZWF0ZShjb250ZW50OnN0cmluZyl7XG5cbiAgICB9XG4gICAgb25DYW5jZWwoKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlSXNFZGl0LnN1YnNjcmliZShcbiAgICAgICAgICBtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlICA9IG1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
