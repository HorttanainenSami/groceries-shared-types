"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerReqBodySchema = exports.registerResponseSchema = exports.loginReponseSchema = exports.loginReqBodySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const users_1 = require("./users");
exports.loginReqBodySchema = zod_1.default.object({
    email: zod_1.default
        .string({
        required_error: 'Email is required',
    })
        .toLowerCase()
        .email({ message: 'Invalid email adress' }),
    password: zod_1.default.string(),
});
exports.loginReponseSchema = zod_1.default.object({
    token: zod_1.default.string(),
    email: zod_1.default.string(),
    id: zod_1.default.string().uuid(),
});
exports.registerResponseSchema = users_1.userSchema.omit({ password: true });
exports.registerReqBodySchema = users_1.userSchema.pick({
    email: true,
    password: true,
    name: true,
});
//# sourceMappingURL=auth.js.map