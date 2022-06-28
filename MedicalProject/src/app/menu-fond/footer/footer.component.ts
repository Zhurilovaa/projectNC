import { ChangeDetectionStrategy,ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'menu-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent{

  constructor(private ref: ChangeDetectorRef) { }

}
