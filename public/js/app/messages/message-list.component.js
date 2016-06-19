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
var message_service_1 = require("./message.service");
var MessageListComponent = (function () {
    // message: Message = new Message('A new message', null, 'Max')
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
        this.messages = [
            new message_1.Message('A new message', null, 'Max'),
            new message_1.Message('Another message', null, 'Anna')];
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.messages = this._messageService.getMessages();
        this._messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
            _this._messageService.messages = messages; // one single object, istant updating
        });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n          <section class =\"col-md-8 col-md-offset-2\">\n               <my-message *ngFor=\"let message of messages\" [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n            </section>            \n",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFpQmpEO0lBQ0ksK0RBQStEO0lBRS9ELDhCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFFbkQsYUFBUSxHQUFjO1lBQ2xCLElBQUksaUJBQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztZQUN6QyxJQUFJLGlCQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFKRyxDQUFDO0lBTXRELHVDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLHFEQUFxRDtRQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTthQUMzQixTQUFTLENBQ04sVUFBQSxRQUFRO1lBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMscUNBQXFDO1FBQ25GLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQWhDTDtRQUFDLGdCQUFTLENBQUM7WUFFUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwrT0FJYjtZQUNHLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBRWpDLENBQUM7OzRCQUFBO0lBd0JGLDJCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSw0QkFBb0IsdUJBb0JoQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzID1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgPG15LW1lc3NhZ2UgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2VkKT1cIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPjwvbXktbWVzc2FnZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj4gICAgICAgICAgICBcbmAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG4gICAgLy9wcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5cbi8vIGFkZGluZyBhIGxpZmVjeWNsZSBtZXRob2RcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIC8vIG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnQSBuZXcgbWVzc2FnZScsIG51bGwsICdNYXgnKVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XG5cbiAgICBtZXNzYWdlczogTWVzc2FnZVtdID0gW1xuICAgICAgICBuZXcgTWVzc2FnZSgnQSBuZXcgbWVzc2FnZScsIG51bGwsICdNYXgnKSxcbiAgICAgICAgbmV3IE1lc3NhZ2UoJ0Fub3RoZXIgbWVzc2FnZScsIG51bGwsICdBbm5hJyldO1xuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgLy90aGlzLm1lc3NhZ2VzID0gdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPT4gIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcyA9IG1lc3NhZ2VzOyAvLyBvbmUgc2luZ2xlIG9iamVjdCwgaXN0YW50IHVwZGF0aW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
