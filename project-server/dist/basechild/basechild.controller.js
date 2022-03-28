"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasechildController = void 0;
const common_1 = require("@nestjs/common");
const create_childinfo_dto_1 = require("./dto/create-childinfo.dto");
const update_childinfo_dto_1 = require("./dto/update-childinfo.dto");
let BasechildController = class BasechildController {
    getAll() {
        return 'getAll work!';
    }
    getOne(id) {
        return ('getOne ' + id);
    }
    create(createChildInfoDTO) {
        return `nameChild: ${createChildInfoDTO.nameChild}, Sym:  ${createChildInfoDTO.monSym}`;
    }
    remove(id) {
        return 'remove ' + id;
    }
    updateEl(updateChildInfoDTO, id) {
        return `nameChild: ${updateChildInfoDTO.idChild}, Sym:  ${updateChildInfoDTO.donateSym}`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasechildController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BasechildController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_childinfo_dto_1.CreateChildInfoDTO]),
    __metadata("design:returntype", void 0)
], BasechildController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasechildController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_childinfo_dto_1.UpdateChildInfoDTO, String]),
    __metadata("design:returntype", void 0)
], BasechildController.prototype, "updateEl", null);
BasechildController = __decorate([
    (0, common_1.Controller)('basechild')
], BasechildController);
exports.BasechildController = BasechildController;
//# sourceMappingURL=basechild.controller.js.map