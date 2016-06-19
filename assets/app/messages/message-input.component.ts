import {Component} from "@angular/core";
import {Message} from "./message";
import {MessageService} from "./message.service"
import {OnInit} from "../../../public/js/vendor/@angular/core/esm/src/metadata/lifecycle_hooks";

@Component({

    selector: 'my-message-input',
    template: `
          <section class ="col-md-8 col-md-offset-2">
           <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
              <div class="form-group">
                <label for="content">Content</label>
                <input ngControl="content" type="text" class="form-control" id="content" #input [value] = "message?.content">
            </div>
            <button type="submit" class="btn btn-primary">{{ !message ? 'Send Message': 'Save Message'}}</button>
            <button type="button" (click)="onCancel()" class="btn btn-danger" *ngIf="message">Cancel </button>
            </form>
        
            </section>            
`,
    // remove providers
    // providers:[MessageService] //inject message service
})

export class MessageInputComponent implements OnInit{

    message: Message = null; // reference to obj


    constructor(private _messageService: MessageService){}

    onSubmit(form:any) {

        if(this.message){
            // Edit
            this.message.content = form.content;
            this.message = null;  // refernecen to obj is changed to new object
                                    // 

        }
        else{
            const message: Message = new Message(form.content, null, 'Dummy');
            //console.log(message);
            this._messageService.addMessage(message)
                .subscribe(
                    data => {
                        console.log(data);
                        this._messageService.messages.push(data);   // comment out this and updates will not be istant

                    },error => console.error(error)

                )
        }


    }
    onCreate(content:string){

    }
    onCancel(){
        this.message = null;
    }

    ngOnInit(){
        this._messageService.messageIsEdit.subscribe(
          message => {
              this.message  = message;
          }
        );
    }

}