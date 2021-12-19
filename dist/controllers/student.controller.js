"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
    {
        http: "get",
        path: "/student-get",
        handler: (req, res) => {
            res.send("get student");
        },
    },
    {
        http: "post",
        path: "/student-post",
        handler: (req, res) => {
            res.send("post student");
        },
    },
];
//# sourceMappingURL=student.controller.js.map