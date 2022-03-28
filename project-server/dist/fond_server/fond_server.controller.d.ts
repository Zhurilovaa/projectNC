import { UpdateChildInfoDTO } from 'src/basechild/dto/update-childinfo.dto';
import { Child } from './childInfo';
export declare class FondServerController {
    childList: Child[];
    getAllChild(): Child[];
    getChildId(idCh: any): Child | "Не найдено!";
    donatPlus(updateChildInfoDTO: UpdateChildInfoDTO): Child[];
}
