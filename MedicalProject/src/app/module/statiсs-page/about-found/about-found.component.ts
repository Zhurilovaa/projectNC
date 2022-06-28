import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of} from 'rxjs';
import { FondService } from 'src/app/server/service/fond.service';

@Component({
  selector: 'stat-about-found',
  templateUrl: './about-found.component.html',
  styleUrls: ['./about-found.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutFoundComponent implements OnInit{

  public content: Observable<string>  = of("");

  constructor(private fondService: FondService, private route: ActivatedRoute, private ref: ChangeDetectorRef){}  

  ngOnInit(): void{
    this.content = this.route.params.pipe(map( (params) => params['content']));
  } 
}
