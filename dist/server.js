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
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./controllers/routes"));
const uri = "mongodb://localhost:27017/academy?retryWrites=true&w=majority";
const setupMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    };
    try {
        yield mongoose_1.default.connect(uri, options);
        console.log("mongodb connection successfull");
        mongoose_1.default.Promise = global.Promise;
    }
    catch (error) {
        console.log(error);
    }
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    let app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
    app.use("/api", routes_1.default);
    app.get("/", (req, res) => {
        res.send(`Other request:\n${req.method} at \n` + new Date());
    });
    yield setupMongo();
    yield app.listen(3000);
    console.log("listening to the port 3000");
});
init();
//# sourceMappingURL=server.js.map