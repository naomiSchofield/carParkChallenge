let carArray = [4, 'grey', true]

let carObject = {
    doors: 4,
    color: 'grey',
    convertible: true,
}

let personFactory = {
    gender: 'female',
    ethnicity: 'British',
    dob: '17-12-1992',
    name: 'naomi',
    height: "5'9",
    likesFootball: true,
    hair: {
        headHair: {
            color: ['blonde', 'brown'],
            length: 'medium',
            type: 'wavy/curly',
        },
        armPitHair: {
            color:['white', 'brown'],
            length: 'short',
            type: 'soft',
        }
    }
}

personFactory.surname = "Schofield"
console.log(personFactory)


// console.log(personFactory.hair.color[1])

//dean's code
let carArray2 = [4, 'grey', true];
let carObject2 = {
    color: ['grey', 'red'],
    doors: {
        material: 'carbon fiber',
        windows: {
            tinted: true,
            typeOfGlass: 'regular'
        }
    },
    convertible: true,
    drive() {
        //code to make the car drive
        console.log('vrooooooom')
    },
    queryCar() {

        return this.convertible
    },
}

// carObject2.drive()
// console.log(carObject2.queryCar())



//this - key word. 
//'this' references the object that you are inside of. 