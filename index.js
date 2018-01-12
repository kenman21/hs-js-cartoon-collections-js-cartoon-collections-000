function dwarfRollCall(dwarves) { 
  var string = ""
  for (var i = 0; i<dwarves.length; i++) {
    string = `${string} ${i+1}. ${dwarves[i]}`
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
    if (words[i].length > 4) {
      return true
    }
  }
  return false
}


function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  for (var i = 0; i < foods.length; i++) {
    for (var j = 0; j < cheese.length; j++) {
      if (foods[i] == cheese[j]) {
        return foods[i]
      }
    }
  }
  return "no cheese!"
}

function WordswithB(words) {
  var names = []
  for (var i = 0; i< words.length; i++) {
    if (words[i][0] == "B") {
      names.push(words[i])
    }
    }
    
  }






