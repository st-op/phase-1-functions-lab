let currentLocation
function distanceFromHqInBlocks(currentLocation) {
const hqLocation = 42
let distance = Math.abs(hqLocation - currentLocation) 
 return distance 
}
function distanceFromHqInFeet(currentLocation) {
let distanceInFt = distanceFromHqInBlocks(currentLocation) * 264
return distanceInFt
}
function distanceTravelledInFeet(start, destination) {
let newLocation = Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination))
return newLocation
}
let farePrice
let fareRate
function calculatesFarePrice(start, destination) {
const distance = Math.abs(destination - start)*264
if (distance < 400) {
    farePrice = 0
}
else if (400 < (distance) && (distance) < 2000) {
    fareRate = 0.02
    farePrice = fareRate * (distance - 400)
}
else if (2001 < (distance) && (distance) < 2500) {
    farePrice = 25
}
else if ((distance) > 2500) {
    farePrice = 'cannot travel that far'
}
return farePrice
}
console.log(calculatesFarePrice(34, 24))