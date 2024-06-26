import Debug from '@bicycle-codes/debug'
import steps from './steps.json'
const debug = Debug()

// debug('json url', jsonUrl)

const array:any[] = []

debug('the steps', steps)

for (const object in steps) {
    array.push(steps[object])
}

loop(array)

// fetch('steps.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('HTTP error ' + response.status)
//         }
//         return response.json()
//     })
//     .then(json => {
//         for (const object in json) {
//             array.push(json[object])
//         }

//         loop(array)
//     })
//     .catch(function (err) {
//         debug('errrrrrrrrr', err)
//     })

// basic infinite loop

function loop (arr) {
    let count = 0
    const text = document.getElementById('text')

    setInterval(() => {
        text!.innerHTML = arr[count]
        if (count === arr.length - 1) {
            count = 0
        } else {
            count++
        }
    }, 50)
}
