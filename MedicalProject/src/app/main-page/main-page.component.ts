import { ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import { FondService } from '../server/service/fond.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent{

  constructor(private fondService: FondService, private ref: ChangeDetectorRef){}

}
