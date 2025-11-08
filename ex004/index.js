import { createInterface } from "readline"

const prompt = createInterface({
    input: process.stdin, output: process.stdout
})

function questioned(query) {
    return new Promise(resolve => {
        prompt.question(query, answer => resolve(answer))
    })
}

const object = JSON.parse(await questioned("Digite um objeto aninhado: "))
const modificado = {}

prompt.close()

function modificar(obj) {
    for (let [chave, valor] of Object.entries(obj)){
        if (valor instanceof Object && !Array.isArray(valor)) {
            for (let [c, v] of Object.entries(valor)) modificado[`${chave}.${c}`] = v
        } else {
            modificado[chave] = valor
        }
    }
    return modificado
}

console.log(object)
console.log(modificar(object))
