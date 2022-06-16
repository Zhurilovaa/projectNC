import { Contacts, News } from "src/app/server/Date/config_date";

export interface ConfigState{
    contactContent: Contacts[],
    newsContent: News[],
}


export const initialConfigState: ConfigState = {
    contactContent: [{
        nameOfTheOrganization: '',
        shortName: '',
        telephone: '',
        fax: '',
        email: '',
        actualAddress: {
            postalCode: 0,
            city: '',
            street: '',
            build: 0,
            office:  0,
        },
        businessAddress:{
            postalCode: 0,
            city: '',
            street: '',
            build: 0,
            office:  0,
        },
        requisites: {
            OGRN: 0,
            Name: '',
            INN: 0,
            KPP: 0,
        }
    }],
    newsContent: [],
};