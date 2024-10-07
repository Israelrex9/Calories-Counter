const resultValue = document.getElementById("result");
const resultView = document.getElementById("result-view");
const form = document.getElementById("form");
const btn = document.getElementById("btn")
const walkingTime = document.getElementById("walkingTime")
const runningTime = document.getElementById("runningTime")
const cyclingTime = document.getElementById("cyclingTime")


function checkInputs(){
    if(walkingTime.value.length > 0 && runningTime.value.length > 0 && cyclingTime.value.length > 0){
        btn.style.background = "var(--btnActive)";
        btn.style.color = "var(--btnTextActive)";
    }else{
        btn.style.background = "var(--btn)";
        btn.style.color = "var(--btnText)";
    }
}

walkingTime.addEventListener("input", checkInputs)
runningTime.addEventListener("input", checkInputs)
cyclingTime.addEventListener("input", checkInputs)

form.addEventListener("submit", function(event){
    event.preventDefault()

    const userInput = {
        timeSpentWalking : walkingTime.value,
        timeSpentRunning : runningTime.value,
        timeSpentCycling : cyclingTime.value,
    }

    //stated facts
    const caloryBurnTime = {
        walking: 5,
        running: 10,
        cycling: 8
    }

    function caloriesBurned(timeSpentWalking, timeSpentRunning, timeSpentCycling){
        let burntWalkedCalories = caloryBurnTime.walking * timeSpentWalking
        let burntRunCalories = caloryBurnTime.running * timeSpentRunning
        let burntCycledCalories = caloryBurnTime.cycling * timeSpentCycling
    
        let totalCaloriesBurned = burntCycledCalories + burntWalkedCalories + burntRunCalories
    
        return totalCaloriesBurned
    }

    let result = caloriesBurned(userInput.timeSpentWalking, userInput.timeSpentRunning, userInput.timeSpentCycling)

    resultView.style.display = "flex";

    resultValue.textContent = result

})



    
