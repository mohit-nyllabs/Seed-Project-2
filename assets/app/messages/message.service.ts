import {Message} from "./message";
import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MessageService {
    messages: Message[] =[];

    constructor (private _http: Http){}

    addMessage(message: Message){

        const body = JSON.stringify(message);
        const headers =  new Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post('http://localhost:3000/message',body , {headers: headers})
            .map(response => response.json())  // Observable sent always
            .catch(error => Observable.throw(error.json())); // Make it explicit Observable

       // this.messages.push(message);
       // console.log(this.messages);
    }

    getMessages(){

        return this.messages;
    }

    editMessage(message: Message){
        this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');   
    }

    deleteMessage(message: Message){

        this.messages.splice(this.messages.indexOf(message),1);
    }

}