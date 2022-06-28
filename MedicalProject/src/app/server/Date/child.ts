export class Child{
    id: number; 
    name: string;
    patronym: string;
    surname: string;
    birthDate: string;
    gender: string;
    needSum: number;
    donatSum: number;
    history: string;

    constructor(
        idC:string = "",
        nameC: string = "",
        patronymC: string="",
        surnameC: string="",
        birthDateC: string="",
        genderC: string="",
        needSumC: number=0,
        donatSumC: number=0,
        historyC: string=""){

        this.id = +(idC);
        this.name = nameC;
        this.patronym = patronymC;
        this.surname = surnameC;
        this.birthDate = birthDateC;
        this.gender = genderC;
        this.needSum = needSumC;
        this.donatSum = donatSumC;
        this.history = historyC;
    }
}

export class UpdateChild{
    donateSum: number;

    constructor (don:number = 0){
        this.donateSum = don;
    }
}