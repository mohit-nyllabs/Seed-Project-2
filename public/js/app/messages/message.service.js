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
        this.messageIsEdit = new core_1.EventEmitter();
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
    MessageService.prototype.updateMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        // to instantly update... as soon as message is changed .. array is updated
        //this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');
        return this._http.patch('http://localhost:3000/message/' + message.messageId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    //to load our edit view to make our messages editable
    MessageService.prototype.editMessage = function (message) {
        //this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');
        this.messageIsEdit.emit(message);
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete('http://localhost:3000/message/' + message.messageId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3QztJQUlJLHdCQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUhoQyxhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFFVixDQUFDO0lBRW5DLG1DQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUV2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFJLElBQUksY0FBTyxDQUFDO1lBQ3pCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFDLElBQUksRUFBRyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUU1RSxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJ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QUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9W107XG4gICAgbWVzc2FnZUlzRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8TWVzc2FnZT4oKTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKXt9XG5cbiAgICBhZGRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2Upe1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9ICBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScsYm9keSAsIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC8vLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpICAvLyBPYnNlcnZhYmxlIHNlbnQgYWx3YXlzXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGRhdGEuY29udGVudCwgZGF0YS5faWQsJ0R1bW15JywgbnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7IC8vIE1ha2UgaXQgZXhwbGljaXQgT2JzZXJ2YWJsZVxuXG4gICAgICAgLy8gdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXMpO1xuICAgIH1cblxuICAgIGdldE1lc3NhZ2VzKCl7XG5cbiAgICAgICAgLy9yZXR1cm4gdGhpcy5tZXNzYWdlcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0wOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YVtpXS5jb250ZW50LGRhdGFbaV0uX2lkLFwiRHVtbXlcIixudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gIG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRvIGluc3RhbnRseSB1cGRhdGUuLi4gYXMgc29vbiBhcyBtZXNzYWdlIGlzIGNoYW5nZWQgLi4gYXJyYXkgaXMgdXBkYXRlZFxuICAgICAgICAvL3RoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpXSA9IG5ldyBNZXNzYWdlKCdFZGl0ZWQnLCBudWxsLCAnRHVtbXknKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlLycgKyBtZXNzYWdlLm1lc3NhZ2VJZCxib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIH1cblxuICAgIC8vdG8gbG9hZCBvdXIgZWRpdCB2aWV3IHRvIG1ha2Ugb3VyIG1lc3NhZ2VzIGVkaXRhYmxlXG4gICAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSl7XG4gICAgICAgIC8vdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoJ0VkaXRlZCcsIG51bGwsICdEdW1teScpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VJc0VkaXQuZW1pdChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBkZWxldGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpeyBcblxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksMSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UvJyArIG1lc3NhZ2UubWVzc2FnZUlkKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
