import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { Child } from "../childDate/child";

//В сервисе определен массив данных и методы работы с ним
//Позже-данные с сервера
//Пока методы стандартные
@Injectable()
export class FondService{

    private childUrl = 'http://localhost:3000/fond-server';
    public children: Child[] = [
        {
            id: 1,
            name: "Ева",
            patronym: "Михайловна",
            surname: "Котова",
            needSum: 9308407,
            donatSum: 8875112,
        },
        {
            id: 2,
            name: "Дамир",
            patronym: "Артёмович",
            surname: "Скворцов",
            needSum: 7223978,
            donatSum: 5924901,
        },
        {
            id: 3,
            name: "Анна Андреевна",
            patronym: "Андреевна",
            surname: "Герасимова",
            needSum: 520190,
            donatSum: 412955,
        },
        {
            id: 4,
            name: "Богдан Леонидович",
            patronym: "Леонидович",
            surname: "Крюков",
            needSum: 1260711,
            donatSum: 902054,
        },
        {
            id: 5,
            name: "Кирилл",
            patronym: "Дмитриевич",
            surname: "Денисов ",
            needSum: 3153460,
            donatSum: 2223351,
        }
    ];
    
    public tempList: Child[] =[];

    public childL: Child[]=[];

    constructor(private http: HttpClient){
    }

    getData(){
        //this.children = this.http.get(this.childUrl)
        return this.children;
    }
    
    addData(childAdd: Child){
        this.children.unshift(childAdd);
    }


    getServData(): Observable<Child[]>{
        this.http.get('http://localhost:3000/fond-server');

        //ПРИМЕЧАНИЕ. Всегда нужно подписываться(вызывать метод subscibe) в противном случае запрос не будет сделан!

         return this.http.get<Child[]>('http://localhost:3000/fond-server');
    }

        //return this.tempList;
        /*return this.http.get('http://localhost:3000/fond-server').pipe(map((data:any)=>{
            let tempList = data["childList"];
            return tempList.map(function(child: any): Child {
                return new Child(child.id, child.name, child.patronym, child.surname, child.needSum, child.donatSum);
              });
        }));
    }
/*
    getChildL(): Child[]{
        this.http.get<Child[]>(this.childUrl).subscribe((children) => {
            this.childL = children;
        });
        console.log(this.childL);

        return this.childL;
    }*/
}

