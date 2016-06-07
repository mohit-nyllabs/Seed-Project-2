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
var message_component_1 = require("./message.component");
var message_1 = require("./message");
var MessageListComponent = (function () {
    function MessageListComponent() {
        // message: Message = new Message('A new message', null, 'Max')
        this.messages = [
            new message_1.Message('A new message', null, 'Max'),
            new message_1.Message('Another message', null, 'Anna')];
    }
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n          <section class =\"col-md-8 col-md-offset-2\">\n               <my-message *ngFor=\"let message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n            </section>            \n",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFhbEM7SUFBQTtRQUNJLCtEQUErRDtRQUMvRCxhQUFRLEdBQWM7WUFDbEIsSUFBSSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO1lBQ3pDLElBQUksaUJBQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUV0RCxDQUFDO0lBakJEO1FBQUMsZ0JBQVMsQ0FBQztZQUVQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLCtPQUliO1lBQ0csVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDakMsQ0FBQzs7NEJBQUE7SUFRRiwyQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksNEJBQW9CLHVCQU1oQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcyA9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgIDxteS1tZXNzYWdlICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgW21lc3NhZ2VdPVwibWVzc2FnZVwiIChlZGl0Q2xpY2tlZCk9XCJtZXNzYWdlLmNvbnRlbnQgPSAkZXZlbnRcIj48L215LW1lc3NhZ2U+XG4gICAgICAgICAgICA8L3NlY3Rpb24+ICAgICAgICAgICAgXG5gLFxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IHtcbiAgICAvLyBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ0EgbmV3IG1lc3NhZ2UnLCBudWxsLCAnTWF4JylcbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW1xuICAgICAgICBuZXcgTWVzc2FnZSgnQSBuZXcgbWVzc2FnZScsIG51bGwsICdNYXgnKSxcbiAgICAgICAgbmV3IE1lc3NhZ2UoJ0Fub3RoZXIgbWVzc2FnZScsIG51bGwsICdBbm5hJyldO1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
