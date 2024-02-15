function insertRow(){
    let myTable = document.getElementById("sampleTable")
    let newRow = document.createElement("tr")
    let newRow2 = document.createElement("td")
    let newRow3 = document.createElement("td")
    myTable.append(newRow)
    newRow.append(newRow2)
    newRow.append(newRow3)
}