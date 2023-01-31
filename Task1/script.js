const lgth = 11

for (let index = 0; index < lgth; index++) {

    if (index === 0) {
        console.log(`${index} - это ноль`)

    } else if (index % 2 === 0) {
        console.log(`${index} - четное число`)

    } else {
        console.log(`${index} - нечетное число`)
    }
}