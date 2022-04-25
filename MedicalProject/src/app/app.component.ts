import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Child } from './server/childDate/child';
import { FondService } from './server/service/fond.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent { 

}
