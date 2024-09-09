"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const moment_1 = __importDefault(require("moment"));
const index_route_1 = __importDefault(require("./routes/client/index.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.set('views', "./views");
app.set('view engine', 'pug');
app.locals.moment = moment_1.default;
(0, index_route_1.default)(app);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
