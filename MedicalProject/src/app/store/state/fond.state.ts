import { Child, UpdateChildInfoDTO } from "src/app/server/childDate/child";

//Хранилище
export interface fondState{
    children: Child[];
    childUpdate: UpdateChildInfoDTO;
}

//начальное состояние хранилища
export const initialFondState: fondState = {
    children: [],
    childUpdate: new UpdateChildInfoDTO(),
};