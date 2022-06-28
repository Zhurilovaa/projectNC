import { Pipe, PipeTransform } from "@angular/core";
import { Address } from "../server/Date/config_date";

@Pipe({
    name: 'actualAdress',
})
export class ActualAdressPipe implements PipeTransform{

    transform(value: Address, args?: any[]): string {
        
        const result = value.postalCode+', '+value.city+', ул.'+value.street+' д.'+value.build+' помещение '+value.office;
        return result;
        
    }
}

@Pipe({
    name: 'businessAdress',
})
export class BusinessAdressPipe implements PipeTransform{

    transform(value: Address, args?: any[]): string {
        
        const result = value.postalCode+', г.'+value.city+', ул.'+value.street+', '+value.build;
        return result;
        
    }
}