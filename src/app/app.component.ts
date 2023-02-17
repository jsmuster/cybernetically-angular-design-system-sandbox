import { Component } from '@angular/core';
import { ButtonComponent } from 'cybernetically-angular-design-system/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ang-seed-project';

  protected handleOnClick(evt:MouseEvent)
  {
    console.log("evt", evt);
  }

  protected handleLabelChanged(value:string)
  {
    
  }
}
