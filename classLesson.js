class Car { //all classes should and will begin with a capital letter
    constructor(color, doors, convertible) //construct the class based on the user input for these values. 
    { 
        this.color = color
        this.doors = doors
        this.convertible = convertible
        this.wheels = true
        this.windows = 'hopefully'
    }
    takeAwayADoor(){
        this.door --
        console.log(`you now have ${this.doors} doors left.`)
    }
}

const kerryCar = new Car ('purple', 0, false)
const kaelaCar = new Car ('white', 4, false)
console.log(kerryCar)
console.log(kaelaCar)
kaelaCar.takeAwayADoor() 

const naomiCar = new Car ('yellow and black', 8, true)
const baoziCar = new Car ('White and Brown', 2, true)

class UserInformation {
    constructor(emailAddress, name, surname, DOB, password, repeatPassword, agreeToTermsAndConditions, iAmNotARobot) {
    this.emailAddress = emailAddress
    this.name = name
    this.surname = surname
    this.DOB = DOB 
    this.password = password
    this.repeatPassword = repeatPassword
    this.agreeToTermsAndConditions = agreeToTermsAndConditions
    this.iAmNotARobot = iAmNotARobot
    this.isAdmin = false 
    this.isFriend = false
    this.turnOnWebCamOnEntry = false
    this.secretlyRecord = false
    }   
}

const user1Information = new UserInformation('naomi@goole.com', 'naomi', 'schofield', '17/12/1992', 'password1', 'password1', true, true)
console.table(user1Information)





