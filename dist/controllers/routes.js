"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
exports.routes = [
    {
        http: "get",
        path: "/",
        handler: (req, res) => {
            res.send(`Req Method is ${req.method}`);
        },
    },
    {
        http: "post",
        path: "/",
        handler: (req, res) => {
            res.send(`Req Method is ${req.method}`);
        },
    },
    ...student_controller_1.routes,
];
let router = express_1.default.Router();
exports.routes.forEach((route) => {
    router[route.http](route.path, route.handler);
});
exports.default = router;
//# sourceMappingURL=routes.js.map