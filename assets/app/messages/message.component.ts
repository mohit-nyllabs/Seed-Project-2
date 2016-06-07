import { Component, Input,Output, EventEmitter } from '@angular/core';
import {Message} from "./message";

@Component({
    selector: 'my-message',
    template: `
 <article class ="panel panel-default" [ngStyle]="{'background-color': color}" 
 (mouseenter) ="color = 'red'" (mouseleave)="color = 'white'" >
                    <div class ="panel-body">
                        {{ message.content}}
                    </div>
                    <footer class ="panel-footer">
                        <div class ="author">
                            {{message.username}}
                        </div>
                    <div class ="config">
                        <a href ="#" (click)="onClick()">Edit</a>
                        <a href ="#">Delete</a>
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
    color = 'white';
    
    onClick(){
        //this.message.content = 'Changed';
        this.editClicked.emit('Changed');
    }

}