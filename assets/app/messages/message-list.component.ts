import {Component, OnInit} from "@angular/core";
import {MessageComponent} from "./message.component";
import {Message} from "./message";
import {MessageService} from "./message.service";


@Component({

    selector: 'my-message-list',
    template: `
          <section class ="col-md-8 col-md-offset-2">
               <my-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content = $event"></my-message>
            </section>            
`,
    directives: [MessageComponent]
    //providers: [MessageService]
})

// adding a lifecycle method

export class MessageListComponent implements OnInit{
    // message: Message = new Message('A new message', null, 'Max')

    constructor(private _messageService: MessageService){}

    messages: Message[] = [
        new Message('A new message', null, 'Max'),
        new Message('Another message', null, 'Anna')];

    ngOnInit(){
        //this.messages = this._messageService.getMessages();
      this._messageService.getMessages()
            .subscribe(
                messages =>  {
                    this.messages = messages;
                    this._messageService.messages = messages; // one single object, istant updating
                }
            );
    }

}