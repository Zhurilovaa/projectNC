import { Admin } from "src/app/server/Date/admin";

export interface ConfigState{
    admin: Admin
}

const adminDate = new Admin('admin', 'pass');

export const initialConfigState: ConfigState = {
    admin: adminDate,
};