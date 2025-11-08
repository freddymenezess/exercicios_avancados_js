function um() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1)  
            resolve()
        }, 2000)
    })
}

function dois() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(2)  
            resolve()
        }, 300)
    })
}

function tres() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(3)  
            resolve()
        }, 1500)
    })
}

function quatro() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(4)  
            resolve()
        }, 500)
    })
}

(async (...promises) => {
    for (let promise of promises) await promise()
})(um, dois, tres, quatro)
