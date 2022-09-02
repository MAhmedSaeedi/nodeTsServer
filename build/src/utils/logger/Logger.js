"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var winston_1 = __importDefault(require("winston"));
var LoggerConfig_json_1 = require("@configs/LoggerConfig.json");
var Logger = /** @class */ (function () {
    function Logger() {
        this.logger = winston_1.default.createLogger({
            transports: [
                new winston_1.default.transports.Console(LoggerConfig_json_1.options.console),
                new winston_1.default.transports.File(LoggerConfig_json_1.options.file)
            ]
        });
    }
    Logger.getLoggerInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.getLogger = function () {
        var _logger = Logger.getLoggerInstance();
        return _logger.logger;
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map