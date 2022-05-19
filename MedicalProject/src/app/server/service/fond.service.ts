import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Child, UpdateChild } from "../childDate/child";

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

        let updChild = new UpdateChild(donate);
        console.log(updChild);
        
        return this.http.put<Child>(this.childUrl, updChild);       
    }

}