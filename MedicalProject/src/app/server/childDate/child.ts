//для работы с информацией как с объектами
export class Child{
    id: number; //возможно лучше string
    name: string;
    patronym: string;
    surname: string;
    gender: string;
    needSum: number;
    donatSum: number;

    constructor(idC:string = "", nameC: string = "", patronymC: string="",surnameC: string="", genderC: string="", needSumC: number=0,donatSumC: number=0){
        this.id = +(idC);
        this.name = nameC;
        this.patronym = patronymC;
        this.surname = surnameC;
        this.gender = genderC;
        this.needSum = needSumC;
        this.donatSum = donatSumC;
    }
}

//для запроса PUT
export class UpdateChildInfoDTO{
    //здесь нужно обозначить какие поля мы ожидаем в этом объекте
    //учитывая, что мы их не меняем, делаем сразу с модификатором readonly
    idChild: number;
    donateSum: number;

    constructor (id:number = -1, don:number = 0){
        this.idChild = id;
        this.donateSum = don;
    }
}