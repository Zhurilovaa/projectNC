import { ChangeDetectionStrategy,ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
