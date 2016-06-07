import { Component, Input } from '@angular/core';

import {Message} from "./messages/message";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";

@Component({
    selector: 'my-app',
    template: ` 
         <div class="row spacing">
             <my-message-input></my-message-input>
        </div>
        <div class = "row spacing">
          <my-message-list></my-message-list>
        </div>
       
    `,
    directives: [MessageListComponent,MessageInputComponent]
})
export class AppComponent {
   // message: Message = new Message('A new message', null, 'Max')
   

}