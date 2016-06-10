"use strict";
///<reference path="../../typings.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var message_service_1 = require("./messages/message.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [message_service_1.MessageService, router_1.ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6Qyx5Q0FBMEIsbUNBQW1DLENBQUMsQ0FBQTtBQUM5RCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsZ0NBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFFMUQsb0NBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMsZ0NBQWMsRUFBRSx5QkFBZ0IsRUFBRSxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy5kLnRzXCIvPlxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbTWVzc2FnZVNlcnZpY2UsIFJPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
