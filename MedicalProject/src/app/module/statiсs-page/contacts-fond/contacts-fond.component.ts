import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from 'src/app/server/Date/config_date';
import { ConfigService } from 'src/app/server/service/config.service';

@Component({
  selector: 'stat-contacts-fond',
  templateUrl: './contacts-fond.component.html',
  styleUrls: ['./contacts-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsFondComponent implements OnInit{  

  //public adminWork = !!sessionStorage.getItem('admin');

  //public content$!: Observable<Contacts[]>; 

  //public edithContent: string;

  constructor(private cserv: ConfigService, private ref: ChangeDetectorRef){}


  ngOnInit(): void {
    /*this.cserv.getСontactContent().subscribe((contactsTemp)=>{
      this.edithContent = contactsTemp[0].nameOfTheOrganization;
    });
    */    
  }
  /*
  getAdminWork():boolean{
    //return this.adminWork;
  }
  */
  /*
  setNewContact(key: string, value: string): void {
    
    this.edithContent = value;
    console.log("ghbdvth");
    console.log(this.edithContent);
  }   
  */
}
