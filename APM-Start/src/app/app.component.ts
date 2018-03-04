import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <h1>
    Welcome to {{title}}!!
  </h1>
  <product-list> </product-list>
</div>
  `
})

export class AppComponent {

}

