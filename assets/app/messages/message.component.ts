import { Component, Input,Output, EventEmitter } from '@angular/core';
import {Message} from "./message";
import {MessageService} from "./message.service";
//*ngIf ="show"
@Component({
    selector: 'my-message',
    template: `
 <article class ="panel panel-default"   >
                    <div class ="panel-body">
                        {{ message.content}}
                    </div>
                    <footer class ="panel-footer">
                        <div class ="author">
                            {{message.username}}
                        </div>
                    <div class ="config">
                        <a  (click)="onEdit()">Edit</a>
                        <a  (click)="onDelete()">Delete</a>  
                    </div>
                    </footer>
                </article>
`, styles:[`
        .author {
        
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
        }
        .config{
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
        }
`]
})

export class MessageComponent {
    //message: Message = new Message('The content', null, 'Max');
    @Input() message:Message;
    @Output() editClicked = new EventEmitter<string>();
   // show =true;  // see template binding in the html code when value is true or false, removed and added to DOM

    constructor (private _messageService: MessageService) {}

    onEdit(){

        this._messageService.editMessage(this.message);
    }

    onDelete(){

        this._messageService.deleteMessage(this.message);
    }

   /* onClick(){
        //this.message.content = 'Changed';
        this.editClicked.emit('Changed');
    }*/

}