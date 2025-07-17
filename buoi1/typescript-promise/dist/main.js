var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let money = 10000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can by " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    }));
};
money = 1000001;
function process() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield buyACar("Vinfast");
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    });
}
process();
//# sourceMappingURL=main.js.map