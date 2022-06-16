import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateNews',
})
export class DateNewsPipe implements PipeTransform{

    transform(value: string, args?: any[]): string {

        const tempDate = new Date(value);

        const day = tempDate.getDate();
        const month = tempDate.getMonth();
        const year = tempDate.getFullYear();
        let time = tempDate.getHours()+':';
        if(tempDate.getMinutes()-10<0){
            time += ('0'+tempDate.getMinutes());
        }
        else time += tempDate.getMinutes();

        let result: string = day.toString();

        switch(month){
            case 0:
                result += ' Янв';
                break;
            case 1:
                result += ' Февр';
                break;
            case 2:
                result += ' Март';
                break;
            case 3:
                result += ' Апр';
                break;
            case 4:
                result += ' Май';
                break;
            case 5:
                result += ' Июнь';
                break;
            case 6:
                result += ' Июль';
                break;
            case 7:
                result += ' Авг';
                break;
            case 8:
                result += ' Сент';
                break;
            case 9:
                result += ' Окт';
                break;
            case 10:
                result += ' Нояб';
                break;
            case 11:
                result += ' Дек';
                break;
            default:
                break;
        } 
        
        result += (' '+year.toString());
        result += (' в '+time);
        return result;
        
    }

}