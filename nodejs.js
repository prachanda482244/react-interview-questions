const log = console.log

const reactObj = {
    check1: true,
    check2: true,
    check3: true
}

for (let keys in reactObj) {
    log("Keys:" + keys)
    log("Values:" + reactObj[keys])
}

const obj = {
    name: 'something',
    age: '1'
}
const dynamicKey = "class"
const changeval = (obj) => {
    let cloneObj = {...obj, newProp: 'newprop', [dynamicKey]: '123343453' }
    log(cloneObj)

    let changeName = {...obj, name: 'change' }
    log(changeName)
}

changeval(obj)

const letters = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8]
    // const fruits = ['mango', 'apple', 'banana', 'grapes']
    // const spliceArray = fruits.splice(2, 1)
    // let newSplice = letters.splice(3, 4)
const arrrrr = [1, 2, 3, 4].join('')
let newSlice = letters.slice(3, 6)
log(newSlice)
log(arrrrr)


async function foo() {
    return 'Program execution'
}
const execute = async() => {
    return log(await foo())
}
execute()
const sentence = "my name is something and i want every word to be uppercase"

const capitalize = (sentence) => {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))
}
log(sentence)
log(capitalize(sentence))
console.clear()

let items = [{
        id: 1,
        name: 'Prachanda',
        description: 'Hello my name is prachanda rana',
        profession: 'Developer Programmer'
    },
    {
        id: 2,
        name: 'Sushmita',
        description: 'Hello i am sushmita ',
        profession: 'Developer'
    },
    {
        id: 3,
        name: 'Ranjan',
        description: 'Yo nigggas im someone else',
        profession: 'Driving'
    },
    {
        id: 4,
        name: 'Rajesh Rana',
        description: 'Myself rajesh rana',
        profession: 'Footballer'
    },
    {
        id: 5,
        name: 'Prakash',
        description: 'Warm greetings to all',
        profession: 'Developer'
    },
    {
        id: 6,
        name: 'Cree zana',
        description: 'Good morning to all im srijana',
        profession: 'Programmer'
    },
    {
        id: 7,
        name: 'Asish',
        description: 'Mero naam chai aasish ho',
        profession: 'Xaina kei'
    }
]


const removeObj = (id) => {
    items = items.filter((item) => item.id !== id)
}


const searchItem = (input) => {
    items = items.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()) || item.description.toLowerCase().includes(input.toLowerCase()) || item.profession.toLowerCase().includes(input.toLowerCase()))
    log(items.length ? `${items.length} Search Items Found` : 'No items found')
}
removeObj(30)
searchItem('driving')
log(items)


console.clear()

const newObj = {
    name: 'prachanda',
    greet() {
        console.log(this.name)
    }
}
log(newObj.greet())

// function a() {
//     var x = 10;
//     b()

//     function b() {
//         log(x)
//         c()
//         var x = 5

//         function c() {
//             log(x)
//             x = 15
//         }
//     }
// }
// log(a())