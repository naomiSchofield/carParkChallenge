//Let’s create a class called Cars for a car parking company.
//This will allow you to store information of: car registration number, number of hours parked and total amount charged. (Say £1.50 per hour?)
//The first car entered the car park, parked for 5 hours and ready to pay.
// Display this information so the driver can pay for his/her parking fee.
const yourCar = document.getElementById('carInfo')
const youOwe = document.getElementById('amountOwed')
const clickToPay = document.getElementById('clickToPay')
const willPay = document.getElementsByClassName('willPay')
const havePaidMessage = document.getElementById('havePaidMessage')
const carName = document.getElementById('carName')
const carReg = document.getElementsByClassName('carReg')
const hrsParked = document.getElementsByClassName('hrsParked')
const enterDetails = document.getElementById('enterDetails')


class Car {
    constructor(carRegNum, numHrsParked) {
    this.carRegNum = carRegNum
    this.numHrsParked = numHrsParked
    this.paid = false
    this.amountToPay = this.numHrsParked * 1.5 

    }
    

    payParking() {

        if (willPay.value == this.amountToPay) {
        havePaidMessage.textContent ='you have paid ' + this.amountToPay + ' to park here, enjoy your day.'
        this.paid = true
        }
        else if (willPay.value !== this.amountToPay){
            havePaidMessage.textContent = `You must enter the exact amount.`
        }

    }

}

const baoziCar = new Car('B40Z1C1N44LYF', 8)

clickToPay.addEventListener('click',() => {
baoziCar.payParking()
})

enterDetails.addEventListener('click', () => {
    console.log('Your car details');
    console.log(baoziCar.amountToPay)
    youOwe.textContent = `You Owe: £${baoziCar.amountToPay}`
    yourCar.textContent = `Your car: ${baoziCar}`
    //cannot display object.
})

// const displayCarDetails = () => {
//     yourCar.textContent = 'Your car details'
// }

// displayCarDetails()


