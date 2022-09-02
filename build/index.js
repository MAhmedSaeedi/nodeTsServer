"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apserver = void 0;
require('module-alias/register');
var Server_1 = require("./src/core/Server");
var aps = (0, Server_1.server)();
exports.apserver = aps;
//# sourceMappingURL=index.js.map