function dwarfRollCall(dwarves) {
  var number = 0 
  var string = ""
  for (var i = 0; i<dwarves.length; i++) {
    number = i + 1
    string = string + number + ". " + dwarves[i] + " " 
  }
  return string
}

function summonCaptainPlanet(planeteerCalls){
  for (var i= 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i ++) {
    if (words.length > 4) {
      return true
    } else{
      return false
    }
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  for (var i = 0; i < cheese.length; i++) {
    for (var j = 0; j < foods.length; j++) {
      if (cheese[i] == foods[j]) {
        return foods[j]
      }
    }
  }
  return "no cheese!"
}
