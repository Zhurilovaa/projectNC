//для работы с информацией как с объектами
export interface Child{
    id: number, //возможно лучше string
    name: string,
    patronym: string,
    surname: string,
    needSym: number,
    donatSym: number,
}

//для запроса PUT
export class UpdateChildInfoDTO{
    //здесь нужно обозначить какие поля мы ожидаем в этом объекте
    //учитывая, что мы их не меняем, делаем сразу с модификатором readonly
    idChild: number;
    donateSym: number;

    constructor (id:number = -1, don:number = 0){
        this.idChild = id;
        this.donateSym = don;
    }
}