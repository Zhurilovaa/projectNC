import { CreateChildInfoDTO } from './dto/create-childinfo.dto';
import { UpdateChildInfoDTO } from './dto/update-childinfo.dto';
export declare class BasechildController {
    getAll(): string;
    getOne(id: string): string;
    create(createChildInfoDTO: CreateChildInfoDTO): string;
    remove(id: string): string;
    updateEl(updateChildInfoDTO: UpdateChildInfoDTO, id: string): string;
}
