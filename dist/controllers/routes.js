"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
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
//# sourceMappingURL=routes.js.map