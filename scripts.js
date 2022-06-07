// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

let takeOff = document.getElementById("takeoff")
let abort = document.getElementById("missionAbort")
let landing = document.getElementById("landing")
let flightStatus = document.getElementById("flightStatus")
let shuttleBackground = document.getElementById("shuttleBackground")
let shuttleHeight = document.getElementById("spaceShuttleHeight")
let upButton = document.getElementById("up")
let downButton = document.getElementById("down")
let leftButton = document.getElementById("left")
let rightButton = document.getElementById("right")

takeOff.addEventListener('click', function(event){
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
if(response === true){
flightStatus.innerHTML = 'Shuttle in flight.'
shuttleBackground.style.backgroundColor = "blue"
shuttleHeight.innerHTML += 10000

}
})
landing.addEventListener('click', function(event){
window.alert("The shuttle is landing. Landing gear engaged")
flightStatus.innerHTML = 'The shuttle has landed.'
shuttleBackground.style.backgroundColor = 'green'
shuttleHeight.innerHTML = 0

})
abort.addEventListener('click', function(event){
let response = window.confirm("Confirm that you want to abort the mission.")
if(response === true){
flightStatus.innerHTML = 'Mission aborted.'
shuttleBackground.style.backgroundColor = 'green'
shuttleHeight.innerHTML = 0

}
})


};
window.addEventListener("load", init);