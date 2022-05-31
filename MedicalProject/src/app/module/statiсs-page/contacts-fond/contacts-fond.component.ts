import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stat-contacts-fond',
  templateUrl: './contacts-fond.component.html',
  styleUrls: ['./contacts-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsFondComponent{

  public nameFond: string = 'Некоммерческая организация "Нижегородский онкологический научный центр';

  public adminWork = !!sessionStorage.getItem('admin');

  

  getAdminWork():boolean{
    return !!sessionStorage.getItem('admin');
  }

}
