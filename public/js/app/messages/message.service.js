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
var message_1 = require("./message");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post('http://localhost:3000/message', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var message = new message_1.Message(data.content, data._id, 'Dummy', null);
            return message;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); }); // Make it explicit Observable
        // this.messages.push(message);
        // console.log(this.messages);
    };
    MessageService.prototype.getMessages = function () {
        //return this.messages;
        return this._http.get('http://localhost:3000/message')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var message = new message_1.Message(data[i].content, data[i]._id, "Dummy", null);
                objs.push(message);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited', null, 'Dummy');
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3QztJQUdJLHdCQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUZoQyxhQUFRLEdBQWEsRUFBRSxDQUFDO0lBRVUsQ0FBQztJQUVuQyxtQ0FBVSxHQUFWLFVBQVcsT0FBZ0I7UUFFdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFNLE9BQU8sR0FBSSxJQUFJLGNBQU8sQ0FBQztZQUN6QixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBQyxJQUFJLEVBQUcsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFFNUUsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNULElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDLENBQUMsOEJBQThCO1FBRXBGLCtCQUErQjtRQUMvQiw4QkFBOEI7SUFDakMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFFSSx1QkFBdUI7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDO2FBQ2pELEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztnQkFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUFBLENBQUM7WUFDRixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFnQjtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtRQUUxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBaERMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFrRGIscUJBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLHNCQUFjLGlCQWlEMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICAgIG1lc3NhZ2VzOiBNZXNzYWdlW10gPVtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApe31cblxuICAgIGFkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSl7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gIG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJyxib2R5ICwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLy8ubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgIC8vIE9ic2VydmFibGUgc2VudCBhbHdheXNcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YS5jb250ZW50LCBkYXRhLl9pZCwnRHVtbXknLCBudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTsgLy8gTWFrZSBpdCBleHBsaWNpdCBPYnNlcnZhYmxlXG5cbiAgICAgICAvLyB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgZ2V0TWVzc2FnZXMoKXtcblxuICAgICAgICAvL3JldHVybiB0aGlzLm1lc3NhZ2VzO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJylcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuICAgICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPTA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShkYXRhW2ldLmNvbnRlbnQsZGF0YVtpXS5faWQsXCJEdW1teVwiLG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBvYmpzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG5cbiAgICBlZGl0TWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoJ0VkaXRlZCcsIG51bGwsICdEdW1teScpOyAgIFxuICAgIH1cblxuICAgIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSl7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UodGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpLDEpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
