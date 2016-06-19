///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from "@angular/router";
import { AppComponent } from "./app.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { provide } from "@angular/core";
import {MessageService} from "./messages/message.service";
import { HTTP_PROVIDERS } from "@angular/http";

// hashlocation strategy ..# added in url
bootstrap(AppComponent, [MessageService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}),HTTP_PROVIDERS]);