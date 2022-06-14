import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentCanDeactivate } from 'src/app/app-routing/login.guard';
import { Observable, tap } from 'rxjs';
import { Contacts } from 'src/app/server/Date/config_date';
import { ConfigService } from 'src/app/server/service/config.service';

@Component({
  selector: 'stat-contacts-fond',
  templateUrl: './contacts-fond.component.html',
  styleUrls: ['./contacts-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsFondComponent implements OnInit, DoCheck, ComponentCanDeactivate{  

  public adminWork: boolean;

  public content$!: Observable<Contacts[]>; 

  public formEdith: FormGroup = new FormGroup({
    nameOfTheOrganization: new FormControl(null, [Validators.minLength(1),Validators.pattern("[а-я А-Я 0-9 \"]*")]),
    shortName: new FormControl(null,[Validators.minLength(1),Validators.pattern("[а-я А-Я 0-9 \"]*")]),
    telephone: new FormControl(null, [Validators.minLength(1),Validators.pattern("[0-9 \( \)]*")]),
    fax: new FormControl(null, [Validators.minLength(1),Validators.pattern("[0-9 \( \)]*")] ),
    email: new FormControl(null, [Validators.minLength(7), Validators.email]),
    actualAddress: new FormGroup({
      postalCode: new FormControl(null,[Validators.minLength(6),Validators.maxLength(6), Validators.pattern('[0-9]*')]),
      city: new FormControl(null, [Validators.minLength(1),Validators.pattern("[а-я А-Я \.]*")]),
      street: new FormControl(null, [Validators.pattern("[а-я А-Я \.]*")]),
      build: new FormControl(null,[Validators.minLength(1),Validators.pattern('[0-9]*')]),
      office:  new FormControl(null,[Validators.minLength(1),Validators.pattern('[0-9]*')]),
    }),
    requisites: new FormGroup({
      ogrn: new FormControl(null,[Validators.minLength(13),Validators.maxLength(13), Validators.pattern('[0-9]*')]),
      name: new FormControl(null,[Validators.minLength(1),Validators.pattern("[а-я А-Я 0-9 \']*")]),
      inn: new FormControl(null,[Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      kpp: new FormControl(null,[Validators.minLength(9),Validators.maxLength(9), Validators.pattern('[0-9]*')]),
    }),    
    businessAddress: new FormGroup({
      postalCode: new FormControl(null,[Validators.minLength(6),Validators.maxLength(6), Validators.pattern('[0-9]*')]),
      city: new FormControl(null, [Validators.minLength(1),Validators.pattern("[а-я А-Я \.]*")]),
      street: new FormControl(null, [Validators.minLength(1),Validators.pattern("[а-я А-Я \.]*")]),
      build: new FormControl(null,[Validators.minLength(1),Validators.pattern('[0-9]*')]),
    }),
  });

  constructor(private cserv: ConfigService, private ref: ChangeDetectorRef){}

  ngOnInit(): void {  
    this.content$ = this.cserv.getСontactContent().pipe(
      tap((value)=>{
        this.formEdith.patchValue({
          nameOfTheOrganization: value[0].nameOfTheOrganization,
          shortName: value[0].shortName,
          telephone: value[0].telephone,
          fax: value[0].fax,
          email: value[0].email,
          actualAddress: {
            postalCode: value[0].actualAddress.postalCode,
            city: value[0].actualAddress.city,
            street: value[0].actualAddress.street,
            build: value[0].actualAddress.build,
            office: value[0].actualAddress.office,
          },
          requisites: {
            ogrn: value[0].requisites.OGRN,
            name: value[0].requisites.Name,
            inn: value[0].requisites.INN,
            kpp: value[0].requisites.KPP,            
          },          
          businessAddress:{
            postalCode:  value[0].businessAddress.postalCode,
            city: value[0].businessAddress.city,
            street: value[0].businessAddress.street,
            build: value[0].businessAddress.build,
          },
        });
      })
    ); 
  }

  ngDoCheck(): void{
   this.adminWork = !!sessionStorage.getItem('admin'); 
   //по другому пока не перерисовывается компонент 
   this.ref.markForCheck(); 

  }

  submit(){
    //скомпановать данные и отправить
    if(this.formEdith.dirty && this.formEdith.valid){
      const nameOfTheOrganizationValue: string = this.formEdith.value.nameOfTheOrganization;
      const shortNameValue: string = this.formEdith.value.shortName;
      const telephoneValue:  string = this.formEdith.value.telephone;
      const faxValue:  string = this.formEdith.value.fax;
      const emailValue: string = this.formEdith.value.email;

      const postalCodeValueA: number = this.formEdith.value.actualAddress.postalCode;
      const cityValueA:  string = this.formEdith.value.actualAddress.city;
      const streetValueA:  string = this.formEdith.value.actualAddress.street;
      const buildValueA: number = this.formEdith.value.actualAddress.build;
      const officeValueA: number  = this.formEdith.value.actualAddress.office;      

      const ogrnValue:  number = this.formEdith.value.requisites.ogrn;
      const nameValue: string = this.formEdith.value.requisites.name;
      const innValue: number = this.formEdith.value.requisites.inn;
      const kppValue:  number = this.formEdith.value.requisites.kpp;
    
      const postalCodeValueB: number = this.formEdith.value.businessAddress.postalCode;
      const cityValueB: string = this.formEdith.value.businessAddress.city;
      const streetValueB: string = this.formEdith.value.businessAddress.street;
      const buildValueB: number = this.formEdith.value.businessAddress.build;

      const edithContactValue: Contacts = {
        nameOfTheOrganization: nameOfTheOrganizationValue,
        shortName: shortNameValue,
        telephone: telephoneValue,
        fax: faxValue,
        email: emailValue,
        actualAddress: {
            postalCode: postalCodeValueA,
            city: cityValueA,
            street: streetValueA,
            build: buildValueA,
            office: officeValueA,
        },
        businessAddress:{
            postalCode: postalCodeValueB,
            city: cityValueB,
            street: streetValueB,
            build: buildValueB,
        },
        requisites: {
            OGRN: ogrnValue,
            Name: nameValue,
            INN: innValue,
            KPP: kppValue,
        }, 
      };

      this.formEdith.reset();

      this.cserv.edithContactContent(edithContactValue);
    }
  }

  canDeactivate(): boolean | Observable<boolean> {
    if(this.formEdith.dirty)
    {
      return confirm("Вы хотите покинуть страницу?");
    }
    else return true;
  }

}
