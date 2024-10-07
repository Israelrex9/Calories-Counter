

// Function declaration
function totalPrice(priceForItem1, priceForItem2){
   let totalPrice = priceForItem1 + priceForItem2
   return totalPrice
}

let firstTotalPrice = totalPrice(10, 3)
let secondTotalPrice = totalPrice(24, 54)

console.log(firstTotalPrice, secondTotalPrice)


// Function Expression

const anotherTotalPrice = function(priceForItem1, priceForItem2){
    let totalPrice = priceForItem1 + priceForItem2
    return totalPrice
}

console.log(anotherTotalPrice(15, 90))


// Arrow Function
const totalPrice3 = (priceForItem1, priceForItem2)=>{
    let totalPrice = priceForItem1 + priceForItem2
    return totalPrice
}
let test = totalPrice3(24, 16)
console.log(test)

const newArrow = (fullName)=>{
    console.log(`This is me testing with my fullname ${fullName}`)
}

newArrow("Israel Rex")

const newMeth = lastName => lastName

let result = newMeth("thomas")
console.log(result)



// Word Problem 1
// const employee1 = {
//     baseSalary: 50000,
//     yearsOfService: 6,
// }

// const employee2 = {
//     baseSalary: 60000,
//     yearsOfService: 4,
// }

// const employee3 = {
//     baseSalary: 45000,
//     yearsOfService: 8,
// }

const employeeData = {
    employee1 : {
        baseSalary: 50000,
        yearsOfService: 6,
    },
    employee2 : {
        baseSalary: 60000,
        yearsOfService: 4,
    },
    employee3 : {
        baseSalary: 45000,
        yearsOfService: 8,
    }
}

// function calculateTotalPayment(baseSalary, yearsOfService){
//     let bonusPercent
//     if(yearsOfService >= 5){
//         bonusPercent = 0.10
//     }else{
//         bonusPercent = 0.05
//     }

//     let bonus = baseSalary * bonusPercent
//     let totalSalary = bonus + baseSalary

//     return totalSalary
// }

const calculateTotalPayment = (baseSalary, yearsOfService)=>{
    // let bonusPercent
    // if(yearsOfService >= 5){
    //     bonusPercent = 0.1
    // }else{
    //     bonusPercent = 0.05
    // }

   let bonusPercent =  (yearsOfService>=5) ? 0.1 : 0.05


    let bonus = baseSalary * bonusPercent
    let totalSalary = bonus + baseSalary

    return totalSalary
}

const firstEmployee = calculateTotalPayment(employeeData.employee1.baseSalary, employeeData.employee1.yearsOfService)


const secondEmployee = calculateTotalPayment(employeeData.employee2.baseSalary, employeeData.employee2.yearsOfService)

const thirdEmployee = calculateTotalPayment(employeeData.employee3.baseSalary, employeeData.employee3.yearsOfService)

const completeTotalSalary = firstEmployee + secondEmployee + thirdEmployee

console.log(`The company total salary to be paid for the year is $${completeTotalSalary}`)







// WORD PROBLEM 2

const caloryBurnTime = {
    walking: 5,
    running: 10,
    cycling: 8
}


function caloriesBurnedinADay(walkingTime, runningTime, cyclingTime){
    let burntWalkedCalories = caloryBurnTime.walking * walkingTime
    let burntRunCalories = caloryBurnTime.running * runningTime
    let burntCycledCalories = caloryBurnTime.cycling * cyclingTime

    let totalCaloriesBurned = burntCycledCalories + burntWalkedCalories + burntRunCalories

    return totalCaloriesBurned
}

let caloriesBurned = caloriesBurnedinADay(30, 15, 20)

console.log(`You burnt ${caloriesBurned} calories today`)
