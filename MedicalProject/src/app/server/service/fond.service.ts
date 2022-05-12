import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Child, UpdateChildInfoDTO } from "../childDate/child";

//В сервисе определен массив данных и методы работы с ним
//Позже-данные с сервера
//Пока методы стандартные
@Injectable()
export class FondService{

    private childUrl = 'http://localhost:3000/fond-server';

    constructor(private http: HttpClient){
    }

    //получение списка детей с сервера
    getAllChildren(): Observable<Child[]>{
        console.log("get запрос выполнен!");
        //get запрос
        return this.http.get<Child[]>(this.childUrl);        
    }
    
    //внесение пожертвований
    putChild(id: number, donate: number): Observable<Child>{

        let updChild = new UpdateChildInfoDTO(id, donate);
        console.log(updChild);
        
        return this.http.put<Child>(this.childUrl, updChild);       
    }

}



    /* getServData(): Observable<Child[]>{
        this.http.get('http://localhost:3000/fond-server');

        //ПРИМЕЧАНИЕ. Всегда нужно подписываться(вызывать метод subscibe) в противном случае запрос не будет сделан!

         return this.http.get<Child[]>('http://localhost:3000/fond-server');
    }*/
        
    /*
    getData(){
        //this.children = this.http.get(this.childUrl)
        return this.children;
    }
    */
    /*
    addData(childAdd: Child){
        this.children.unshift(childAdd);
    }
    */

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