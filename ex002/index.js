import { createInterface } from "readline"

const prompt = createInterface({
    input: process.stdin, output: process.stdout
})

function questioned(query) {
    return new Promise(resolve => {
        prompt.question(query, answer => resolve(answer))
    })
}

const arr = JSON.parse(await questioned("Digite um array: "))
const newArr = []

prompt.close()

function achatar(arr){
    for (let item of arr) {
        if (!Array.isArray(item)) {
            newArr.push(item)
        } else {
            achatar(item)
        }
    }
    return newArr
}

console.log(achatar(arr))
