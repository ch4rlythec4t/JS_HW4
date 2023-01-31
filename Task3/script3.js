let arr = []
const lngt = 5
const min = 1
const max = 9

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let minEl = arr[0]
let sum = 0

for (let index = 0; index < lngt; index++) {
    arr[index] = random(min, max)
    sum += arr[index]
    minEl = Math.min(minEl, arr[index])

    if (arr[index] === 3) {
        console.log(`В массиве есть тройки`)
    } else {
        continue
    }

}
console.log(arr)
console.log(`Сумма элементов массива равна ${sum}`)
console.log(`Минимальный элемент массива равен ${Math.min(...arr)}`)