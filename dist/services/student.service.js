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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.getStudents = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const StudentSchema = new Schema({
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    createdAt: { type: Date },
    modifiedAt: { type: Date },
});
const StudentDocument = mongoose_1.default.model("Student", StudentSchema, "Students");
const convert = (model) => {
    let vm = Object.assign({}, JSON.parse(JSON.stringify(model)));
    return vm;
};
const getStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield StudentDocument.find().exec();
    const vms = students.map((student) => convert(student));
    return vms;
});
exports.getStudents = getStudents;
const save = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newStudent = new StudentDocument(Object.assign(Object.assign({}, payload), { id: new mongoose_1.default.Types.ObjectId(), createdAt: new Date(), modifiedAt: new Date() }));
    const saveStudent = yield newStudent.save();
    return saveStudent.id;
});
exports.save = save;
//# sourceMappingURL=student.service.js.map