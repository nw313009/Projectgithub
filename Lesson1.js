function generateRandomNumber(num) {
    //
    return Math.floor(math.random()*num)
}
const collectiveKnowledge = {
    inspirationalQuotes : [ 'Sunny outside today', 'you got this', 'trust yourself'], 
    plays: [ 'shakespeare','neil gaimmen', 'tennsessee williams'],
    books: ['great gatsby', ' all the lights you can see','harry potter']
}
let personalKnowledge = [];
for (let prop in collectiveKnowledge) {
    let optionIdx = generateRandomNumber(collectiveKnowledge[prop].length)

switch(prop) {
    case 'inspirationalQuotes':
        personalKnowledge.push(`The quote right now is "${collectiveKnowledge[prop][optionIdx]}".`)
        break
    case 'plays':
        personalKnowledge.push(`The play of the day is "${collectiveKnowledge[prop][optionIdx]}".`)
        break
    case 'books':
        personalKnowledge.push(`The book of the day is "${collectiveKnowledge[prop][optionIdx]}".`)
        break
        default:
            personalKnowledge.push('There is not enough info.')
}
}
function formatKnowledge(knowledge){
    const formatted = personalKnowledge.join('\n')
    console.log(formatted)
}
formatKnowledge(personalKnowledge);