let users = {
    // 7658: {
    //     name: 'Naomi',
    //     pin: '123',
    //     balance: '700',
    // }

}

const genAccNum = () => {
    //generate random number with a certain amount of numbers and return it. 
    return Math.random()
}

const createUser = (name,pin) => { 
    let accNum =  genAccNum()

    users[accNum] = {
        name,
        pin
    }
}

createUser('naomi', 182394)
createUser('james', 4567890)
console.table(users)