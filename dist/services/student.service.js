"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudents = void 0;
const getStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    return [
        {
            id: "1",
            name: "Sajeeb",
            email: "sajeeb@mail.com",
            phone: "1",
        },
    ];
});
exports.getStudents = getStudents;
//# sourceMappingURL=student.service.js.map