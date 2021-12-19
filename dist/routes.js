"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
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
];
//# sourceMappingURL=routes.js.map