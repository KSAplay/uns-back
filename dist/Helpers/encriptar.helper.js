"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodificarPassword = exports.ComparePassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
function ComparePassword(actual, candidato, llamadaAtras) {
    return bcrypt_1.default.compare(candidato, actual);
}
exports.ComparePassword = ComparePassword;
function CodificarPassword(actual, llamadaAtras) {
    bcrypt_1.default.genSalt(5, (error, salt) => {
        if (error)
            return llamadaAtras(error);
        bcrypt_1.default.hash(actual, salt, (error, hash) => {
            if (error)
                return llamadaAtras(error);
            return llamadaAtras(undefined, hash);
        });
    });
}
exports.CodificarPassword = CodificarPassword;