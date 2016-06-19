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
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var message = new message_1.Message(form.content, null, 'Dummy');
        //console.log(message);
        this._messageService.addMessage(message)
            .subscribe(function (data) {
            console.log(data);
            _this._messageService.messages.push(data); // comment out this and updates will not be istant
        }, function (error) { return console.error(error); });
    };
    MessageInputComponent.prototype.onCreate = function (content) {
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n          <section class =\"col-md-8 col-md-offset-2\">\n           <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n              <div class=\"form-group\">\n                <label for=\"content\">Content</label>\n                <input ngControl=\"content\" type=\"text\" class=\"form-control\" id=\"content\" #input>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Send Message</button>\n            </form>\n        \n            </section>            \n",
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFFN0IsQ0FBQyxDQUYrQztBQXFCaEQ7SUFFSSwrQkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUUsQ0FBQztJQUV0RCx3Q0FBUSxHQUFSLFVBQVMsSUFBUTtRQUFqQixpQkFZQztRQVhHLElBQU0sT0FBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ25DLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFHLGtEQUFrRDtRQUVsRyxDQUFDLEVBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUVsQyxDQUFBO0lBQ1QsQ0FBQztJQUNELHdDQUFRLEdBQVIsVUFBUyxPQUFjO0lBRXZCLENBQUM7SUF0Q0w7UUFBQyxnQkFBUyxDQUFDO1lBRVAsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsdWZBV2I7U0FHQSxDQUFDOzs2QkFBQTtJQXVCRiw0QkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksNkJBQXFCLHdCQXFCakMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIlxuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcyA9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjb250ZW50XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgICAgICAgICA8L3NlY3Rpb24+ICAgICAgICAgICAgXG5gLFxuICAgIC8vIHJlbW92ZSBwcm92aWRlcnNcbiAgICAvLyBwcm92aWRlcnM6W01lc3NhZ2VTZXJ2aWNlXSAvL2luamVjdCBtZXNzYWdlIHNlcnZpY2Vcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2Upe31cblxuICAgIG9uU3VibWl0KGZvcm06YW55KSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShmb3JtLmNvbnRlbnQsIG51bGwsICdEdW1teScpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UubWVzc2FnZXMucHVzaChkYXRhKTsgICAvLyBjb21tZW50IG91dCB0aGlzIGFuZCB1cGRhdGVzIHdpbGwgbm90IGJlIGlzdGFudFxuXG4gICAgICAgICAgICAgICAgfSxlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgICAgICAgICApXG4gICAgfVxuICAgIG9uQ3JlYXRlKGNvbnRlbnQ6c3RyaW5nKXtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
