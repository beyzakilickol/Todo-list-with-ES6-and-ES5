let textBox = document.getElementById("textBox")
let addButton = document.getElementById("add-button")
let pendingTasks = document.getElementById("pendingTasks")
let completedTasks=document.getElementById("completedTasks")

addButton.addEventListener("click", function(){
     let pendingTaskDiv= document.createElement("div")
     pendingTaskDiv.className="pendingTaskDiv"
     pendingTasks.appendChild(pendingTaskDiv)
     let checkBox = document.createElement("input")
     checkBox.className = "checkBox"
     let inputType=document.createAttribute("type")
     inputType.value="checkbox"
     checkBox.setAttributeNode(inputType)
     pendingTaskDiv.appendChild(checkBox)
     let label = document.createElement("label")
     pendingTaskDiv.appendChild(label)
    let task = textBox.value
    label.innerHTML= task
    let deleteButton = document.createElement("button")
    deleteButton.className = "deleteButton"
    deleteButton.innerHTML="Delete"
    pendingTaskDiv.appendChild(deleteButton)
    deleteButton.addEventListener("click",function(){
      if(this.parentElement.parentElement == pendingTasks){
      pendingTasks.removeChild(this.parentElement)}
      else{
      completedTasks.removeChild(this.parentElement)
      }

    })
    //-----------------------------------
    checkBox.addEventListener("change",function(){
      if(checkBox.checked == false){
    pendingTasks.appendChild(this.parentElement)
    }
      if(checkBox.checked){
        completedTasks.appendChild(this.parentElement)
        this.checked = true
      }
    })

})
