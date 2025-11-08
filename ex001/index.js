import { createInterface } from "readline"

const prompt = createInterface({
    input: process.stdin, output: process.stdout
})

function questioned(query) {
    return new Promise(resolve => {
        prompt.question(query, answer => resolve(answer))
    })
}

const numbersStrings = await questioned("Digite números separados por espaços: ")
const arr = numbersStrings.trim().split(" ")
const map = new Map()

prompt.close()

for (const number of arr) {
    map.set(number, (map.get(number) || 0) + 1)
}

const numOrdernados = [...map.entries()].sort((a, b)=> b[1] - a[1])
console.log("Três mais repetidos:" + Array.from(numOrdernados).slice(0, 3))
