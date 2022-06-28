export interface AdminLogin{
    login: string,
    password: string,
}

export interface News{
    id: string,
    dateOfPublication: Date,
    text: string,
}

export interface Address{
    postalCode: number,
    city: string,
    street: string,
    build: number,
    office?:  number,
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
    actualAddress: Address,
    businessAddress: Address,
    requisites: Requisites,        
}