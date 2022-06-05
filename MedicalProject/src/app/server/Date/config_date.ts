//для admin panel


export interface AdminLogin{
    login: string,
    password: string,
}


export interface News{
    dateOfPublication: Date,
    text: string,
}

export interface ActualAdress{
    postalCode: number,
    city: string,
    street: string,
    build: number,
    office:  number,
}
export interface BusinessAddress{
    postalCode: number,
    city: string,
    street: string,
    build: number,
    office:  number,
}

export interface Requisites{
    OGRN: number,
    Name: string,
    INN: number,
    KPP: number,
}

export interface Contacts{
    nameOfTheOrganization: string,
    shortName: string,
    telephone: string,
    fax: string,
    email: string,
    actualAddress: ActualAdress,
    businessAddress:BusinessAddress,
    requisites: Requisites,        
}