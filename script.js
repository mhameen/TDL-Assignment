console.log("Hello Ameen")



function addElement(){
    let toDoContainer = document.getElementById("to-do-container")
    let newTag = document.createElement("p")
    let inputText = document.getElementById("input-text");
    let text = inputText.value
    newTag.innerText = text ;
    let removeText = newTag.setAttribute("onclick","removeItem(this)")
    // console.log(removeText)

    toDoContainer.appendChild(newTag);
}

function removeItem(hello){
    let toDoContainer = document.getElementById("to-do-container")
    toDoContainer.removeChild(hello)
}