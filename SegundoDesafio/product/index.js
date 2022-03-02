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
const operacion = (num1, num2, op) => __awaiter(void 0, void 0, void 0, function* () {
    let operaciones = yield import("./operacion.js");
    let result = 0;
    if (op == "suma") {
        result = operaciones.sumar(num1, num2);
    }
    else {
        result = operaciones.resta(num1, num2);
    }
    return result;
});
const ejecucion = (num1, num2, op) => __awaiter(void 0, void 0, void 0, function* () {
    let resultado = yield operacion(num1, num2, op);
    console.log(resultado);
});
ejecucion(2, 4, "suma");
ejecucion(10, 5, "resta");
