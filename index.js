// Code your solutions in this file
let messages = []

function writeCards(names,  suprise){
    for (let i = 0; i < names.length; i++){
         messages.push(`Thank you, ${names[i]}, for the wonderful ${suprise} gift!`)
    }
    return messages
}
// writeCards(messages, suprise)

// for jon <3 

function countDown(num){
    while (num >= 0){
        console.log(num--)
    }
}

