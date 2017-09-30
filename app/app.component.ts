import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
       
        <div class='container'>
<div class="header-content">
    <div class="header-content-inner">
        <div class="row">
            <h1 id="homeHeading" style='color:white;'>Risk Appetite</h1> <hr>
        </div>
    </div>
</div>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent {
    pageTitle: string = 'Risk Appetite';
}
