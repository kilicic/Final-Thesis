function findParamsForQuery(name, description, happiness, fear, sadness, surprise, disgust, anger, arousal, valence, approachavoidance, category, group) {
    let valuesForQuery = []
    let valuesCategory = []
    let valuesGroup = []
    let valueName = "noName"
    let valueDescription = "noDescription"
    let valuesHappiness = splitStringEmo(happiness)
    let valuesFear = splitStringEmo(fear)
    let valuesSadness = splitStringEmo(sadness)
    let valuesSurprise = splitStringEmo(surprise)
    let valuesDisgust = splitStringEmo(disgust)
    let valuesAnger = splitStringEmo(anger)
    let valuesArousal = splitStringEmo(arousal)
    let valuesValence = splitStringEmo(valence)
    let valuesApproachavoidance = splitStringEmo(approachavoidance)
    if (category === "" || containsNumber(category) == false) {
        valuesCategory = [0,1,2,3,4]
    }
    else if (containsNumber(category)) {
        valuesCategory = splitStringCat(category)
    }
    if (group === "" || containsAnyLetter(group) == false) {
        valuesGroup = ["M", "F", "ALL"]
    }
    else if(containsAnyLetter(group)) {
        valuesGroup = splitStringGroup(group)

    }
    if(containsAnyLetter(name)) { 
        valueName = name
    }
    if(containsAnyLetter(description)) {
        valueDescription = description
    }
 
    /*dobro prati red*/
    valuesForQuery.push(valueName, valueDescription, valuesHappiness, valuesFear, valuesSadness, valuesSurprise, valuesDisgust,
         valuesAnger, valuesArousal, valuesValence, valuesApproachavoidance, valuesCategory, valuesGroup)
    /*console.log(valuesForQuery)*/
    return valuesForQuery
   
}
function splitStringGroup(str) {
    const allValues = [] 
    let values = str.split(" ")
    for (var i = 0; i < values.length; i++) {
        allValues.push(values[i])
    }
    if (allValues.length < 3) { 
        let popuni = 3 - allValues.length 
        for (var i = 0; i < popuni; i++) {
            allValues.push(allValues[allValues.length-1])
        }
    }
 
    return allValues;

}

function splitStringCat(str) { 
    const allValues = [] 
    let values = str.split(" ")
    for (var i = 0; i < values.length; i++) {
        allValues.push(parseFloat(values[i]))
    }

    if (allValues.length < 5) { 
        let popuni = 5 - allValues.length 
        for (var i = 0; i < popuni; i++) {
            allValues.push(parseFloat(allValues[allValues.length-1]))
        }
    }
    return allValues;
}

function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }

function containsNumber(str) {
    return /\d/.test(str);
}

function splitStringEmo(str) { 
    const allValues = []
    let min = 0
    let max = 9
    if(str === "") {
        allValues.push(min, max, min, max)
    }
    else {
        let values = str.split("; ")
        for (var i = 0; i < values.length; i++) {
            /*console.log(values[i]);*/
            if (containsNumber(values[i])) {
                let value = values[i].split(' ') 
                allValues.push(parseFloat(value[1]))
            }
            else {
                if (values[i].includes("min")) {
                    allValues.push(min)
                }
                if (values[i].includes("max")) {
                    allValues.push(max)
                }
            }
        }    
    }
    return allValues;

}

module.exports = findParamsForQuery;