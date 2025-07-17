let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can by " + car);
            } else {
                reject("Do not enough money");
            }
        }, 100);
    }))
}

// money = 1000001;
// const promise = buyACar("Vinfast").then(value => {
//     console.log(value);
// }, error => {
//     console.log(error);
// })

// cập nhật lại tiền
money = 1000001;

// dùng async/await
async function process() {
    try {
        const result = await buyACar("Vinfast");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

process();