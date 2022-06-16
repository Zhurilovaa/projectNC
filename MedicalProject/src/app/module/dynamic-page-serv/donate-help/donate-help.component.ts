import { ChangeDetectionStrategy,ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Child } from 'src/app/server/Date/child';
import { FondService } from 'src/app/server/service/fond.service';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-donate-help-form',
  templateUrl: './donate-help.component.html',
  styleUrls: ['./donate-help.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonateHelpComponent implements OnInit{

  childList$!: Observable<Child[]>;

  //для окна выбора
  public SNP: string[] = ["","",""];
  public emptyInput: boolean[] = [true,true,true];
  public count: number = 0;

  //поиск ребёнка
  public isAnyChildFind = true;

  //видимость окон
  public open_exit_windowChoise = false;
  public open_exit_windowHistory = false;
  public childHistory = new Child();

  constructor(public fserv: FondService, private store: Store<AppState>,private router: Router, private ref: ChangeDetectorRef) {}

  

  ngOnInit(): void {
    this.childList$ = this.fserv.getAllChildren();
  }

  setOpenPopUpChoice():void {
    this.open_exit_windowChoise = true;
  }

  setExitPopUpChoise():void {
    this.open_exit_windowChoise = false;
  }
  
  getPopUpChoise(): boolean {
    return this.open_exit_windowChoise;
  }

  allIsClear(): boolean {
    return (this.SNP[0]==="" && this.SNP[1]==="" && this.SNP[2]==="") ? true : false;
  }

  foundMatch(child: Child): boolean {
    let match: number = 0;
    const nameC: string[] = [child.surname.toLowerCase(),child.name.toLowerCase(),child.patronym.toLowerCase()];
    this.countParam();
    for(let i=0;i<3;i++){      
      if(!this.emptyInput[i]){
        if(nameC[i].startsWith(this.SNP[i].toLowerCase())){
          match = match + 1;
        }
      }
    }
    if(match === this.count){
      return true;
    }
    else{
      return false;
    }
  }

  countParam(){
    this.count=0;
    this.emptyInput = [true,true,true,];
    for(let i=0; i <3; i++){
      if(this.SNP[i]!==""){
        this.emptyInput[i] = false;
        this.count=this.count+1;
      }
    }
  }

  setOpenPopUpHistory(chHistory: Child):void {
    this.open_exit_windowHistory = true;
    this.childHistory = chHistory;

  }

  setExitPopUpHistory():void {
    this.open_exit_windowHistory = false;
    this.childHistory = new Child();
  }
  
  getPopUpHistory(): boolean {
    return this.open_exit_windowHistory;
  }
}
