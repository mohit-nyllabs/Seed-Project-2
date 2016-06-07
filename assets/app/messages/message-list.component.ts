import {Component} from "@angular/core";
import {MessageComponent} from "./message.component";
import {Message} from "./message";

@Component({
    
    selector: 'my-message-list',
    template: `
          <section class ="col-md-8 col-md-offset-2">
               <my-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content = $event"></my-message>
            </section>            
`,
    directives: [MessageComponent]
})

export class MessageListComponent {
    // message: Message = new Message('A new message', null, 'Max')
    messages: Message[] = [
        new Message('A new message', null, 'Max'),
        new Message('Another message', null, 'Anna')];

}