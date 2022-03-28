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
exports.FondServerController = void 0;
const common_1 = require("@nestjs/common");
const update_childinfo_dto_1 = require("../basechild/dto/update-childinfo.dto");
const childbase_1 = require("./childbase");
let FondServerController = class FondServerController {
    constructor() {
        this.childList = childbase_1.childlist;
    }
    getAllChild() {
        return this.childList;
    }
    getChildId(idCh) {
        idCh = +idCh;
        for (let i = 0; i < this.childList.length; i++) {
            if (this.childList[i].id === idCh) {
                return this.childList[i];
            }
        }
        return 'Не найдено!';
    }
    donatPlus(updateChildInfoDTO) {
        let idCh = updateChildInfoDTO.idChild;
        for (let i = 0; i < this.childList.length; i++) {
            if (this.childList[i].id === idCh) {
                this.childList[i].donatSym += updateChildInfoDTO.donateSym;
            }
        }
        return this.childList;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FondServerController.prototype, "getAllChild", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FondServerController.prototype, "getChildId", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_childinfo_dto_1.UpdateChildInfoDTO]),
    __metadata("design:returntype", void 0)
], FondServerController.prototype, "donatPlus", null);
FondServerController = __decorate([
    (0, common_1.Controller)('fond-server')
], FondServerController);
exports.FondServerController = FondServerController;
//# sourceMappingURL=fond_server.controller.js.map