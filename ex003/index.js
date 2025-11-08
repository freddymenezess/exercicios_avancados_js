import { createInterface } from "readline"

const prompt = createInterface({
    input: process.stdin, output: process.stdout
})

function questioned(query) {
    return new Promise(resolve => {
        prompt.question(query, answer => resolve(answer))
    })
}

const object = JSON.parse(await questioned("Digite um objeto: "))
const copyObj = {}

prompt.close()

for (let [chave, valor] of Object.entries(object)) {
    copyObj[chave] = valor
}

console.log(copyObj)
console.log(object)
copyObj["nome"] = "Teste"
console.log(copyObj)
console.log(object)
