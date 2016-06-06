import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` 
        <article class ="panel panel-default">
            <div class ="panel-body">
           {{ message}}
</div>
</article>
    `
})
export class AppComponent {
    message = 'A message';
}