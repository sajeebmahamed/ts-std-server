"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./controllers/routes");
const init = () => {
    let app = (0, express_1.default)();
    routes_1.routes.forEach((route) => {
        app[route.http](route.path, route.handler);
    });
    return app;
};
const app = init();
app.listen(3000, () => {
    console.log("listening");
});
//# sourceMappingURL=server.js.map