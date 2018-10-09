let textBox = document.getElementById("textBox")
let addButton = document.getElementById("add-button")
let pendingTasks = document.getElementById("pendingTasks")
let completedTasks=document.getElementById("completedTasks")
function deleteButton(element){
  if(element.parentElement.parentElement == pendingTasks){
    pendingTasks.removeChild(element.parentElement)
  } else{
    completedTasks.removeChild(element.parentElement)
  }

}
function move(element){
  if(element.checked){
    completedTasks.appendChild(element.parentElement)

  } else {
    pendingTasks.appendChild(element.parentElement)

  }
}

addButton.addEventListener("click", function(){
  let taskValue= textBox.value
  let taskDiv = `
  <div class="taskDiv">
  <input  class="taskCheckBox" type="checkbox" onchange="move(this)"/>
  <label> ${taskValue} </label>
  <button class="deleteButton" onclick="deleteButton(this)">Delete</button>

  </div>
  `
  pendingTasks.insertAdjacentHTML('beforeend',taskDiv)
  // pendingTasks.innerHTML += taskDiv

})
